import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { BaseUrl } from '../../components/BaseUrl';
import { makeSelectLoginDetails } from '../App/selectors';
import * as Actions from '../App/actions';
import { LOGIN } from '../App/constants';
import * as Endpoints from '../../components/Endpoints';

export function* login() {
  const loginDetails = yield select(makeSelectLoginDetails());

  const { username, password } = loginDetails;
  const newData = { username, password, grant_type: 'password' };
  const requestURL = `${BaseUrl}${Endpoints.Login}`;

  console.log(newData, 'newData');
  console.log(requestURL, 'requestURL');
  try {
    const loginResponse = yield call(request, requestURL, {
      method: 'POST',
      // body: JSON.stringify(loginDetails),
      body: JSON.stringify(newData),
      headers: new Headers({
        Authorization: `Basic ${btoa('web-client:password')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(loginResponse, 'loginResponse');

    yield put(Actions.loginSuccessAction(loginResponse));
  } catch (err) {
    console.log(err, 'err');
    yield put(Actions.loginErrorAction(err));
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
