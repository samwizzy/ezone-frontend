import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import * as Constants from './constants';
import * as Actions from './actions';
import * as Selectors from './selectors';
import { BaseUrl } from '../../components/BaseUrl/index';
import * as EndPoints from '../../components/EndPoints/index';

export function* signup() {
  const signupReqData = yield select(Selectors.makeSelectSignupReqData());
  console.log(signupReqData, 'signupReqData');

  const requestURL = `${BaseUrl}${EndPoints.RegistrationUrl}`;
  console.log(requestURL, 'requestURL');

  try {
    const signupRes = yield call(request, requestURL, {
      method: 'POST',
      // body: signupReqData,
      body: JSON.stringify(signupReqData),
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log(signupRes, 'signupRes');
    yield put(Actions.signupSuccessRequest(signupRes));
  } catch (err) {
    console.log(err, 'err signupRes');
    yield put(Actions.signupErrorRequest(err));
  }
}

export default function* registrationPageSaga() {
  yield takeLatest(Constants.SIGNUP_REQUEST, signup);
}
