import { takeLatest, call, put, select } from 'redux-saga/effects';
import qs from 'query-string';
import request from '../../utils/request';
import * as AppConstants from '../App/constants';
import * as AppActions from '../App/actions';
import * as AppSelectors from '../App/selectors';
import * as Constants from './constants';
import * as Actions from './actions';
import * as Selectors from './selectors';
import { BaseUrl } from '../../components/BaseUrl/index';
import * as EndPoints from '../../components/Endpoints';

export function* signup() {
  const signupReqData = yield select(Selectors.makeSelectSignupReqData());

  const requestURL = `${BaseUrl}${EndPoints.RegistrationUrl}`;
  try {
    const signupRes = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(signupReqData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(signupRes, 'signupRes');
    yield put(Actions.signupSuccessRequest(signupRes));
    if (signupRes.success === true) {
      yield put(
        AppActions.openSnackBar({
          open: true,
          message: signupRes.message,
          status: 'success',
        }),
      );
    } else {
      yield put(
        AppActions.openSnackBar({
          open: true,
          message: signupRes.message,
          status: 'warning',
        }),
      );
    }
  } catch (err) {
    console.log(err, 'signupRes error');
    yield put(Actions.signupErrorRequest(err));
    yield put(
      AppActions.openSnackBar({
        open: true,
        message: err.message,
        status: 'error',
      }),
    );
  }
}

export function* login() {
  const loginDetails = yield select(AppSelectors.makeSelectLoginDetails());

  const { username, password } = loginDetails;
  const newData = { username, password, grant_type: 'password' };
  const requestURL = `${BaseUrl}${EndPoints.LoginUrl}`;

  const decode = decodeURIComponent(qs.stringify(newData));

  try {
    const loginResponse = yield call(request, requestURL, {
      method: 'POST',
      body: decode,
      headers: new Headers({
        Authorization: `Basic ${btoa('web-client:password')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(loginResponse, 'loginResponse');

    // yield put(Actions.loginSuccessAction(loginResponse));
    // yield put(Actions.saveToken(loginResponse.access_token));

    // if login is success get user profile with access token
    yield put(AppActions.getUserProfileAction(loginResponse));
    // yield put(
    //   Actions.openSnackBar({
    //     open: true,
    //     message: `Welcome back ${loginResponse.firstName} ${
    //       loginResponse.lastName
    //     }`,
    //     status: 'success',
    //   }),
    // );
  } catch (err) {
    console.log(err, 'err');
    yield put(AppActions.loginErrorAction(err));
    yield put(
      AppActions.openSnackBar({
        open: true,
        message: 'Wrong email or password',
        status: 'error',
      }),
    );
  }
}

export function* userProfile() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());

  const requestURL = `${BaseUrl}${EndPoints.UserProfileUrl}`;

  try {
    const userProfileResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(userProfileResponse, 'loginResponse profile');

    // yield put(Actions.loginSuccessAction(userProfileResponse));

    yield put(AppActions.getUserProfileSuccessAction(userProfileResponse));
  } catch (err) {
    console.log(err, 'err user profile');
    yield put(AppActions.getUserProfileErrorAction(err));
  }
}

// Individual exports for testing
export default function* authorizationPageSaga() {
  // register actions
  yield takeLatest(Constants.SIGNUP_REQUEST, signup);
  // login actions
  yield takeLatest(AppConstants.LOGIN, login);
  yield takeLatest(AppConstants.GET_USER_PROFILE, userProfile);
}