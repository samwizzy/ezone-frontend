import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import * as Constants from './constants';
import * as Actions from './actions';
import * as Selectors from './selectors';
import { BaseUrl } from '../../components/BaseUrl/index';
<<<<<<< HEAD
import * as EndPoints from '../../components/EndPoints';
=======
import * as EndPoints from '../../components/Endpoints';
>>>>>>> f8bd2301693d3f866ef784d88f4c17e51d2b58ff

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

    yield put(Actions.signupSuccessRequest(signupRes));
  } catch (err) {
    yield put(Actions.signupErrorRequest(err));
  }
}

export default function* registrationPageSaga() {
  yield takeLatest(Constants.SIGNUP_REQUEST, signup);
}
