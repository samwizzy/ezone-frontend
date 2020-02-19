import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as AppSelectors from '../App/selectors';
import * as Selectors from './selectors';
import { BaseUrl } from '../../components/BaseUrl';
import request from '../../utils/request';
import * as Endpoints from '../../components/Endpoints';
import * as Actions from './actions';
import * as Constants from './constants';



export function* getEmailConfigSaga() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const currentUser = yield select(AppSelectors.makeSelectCurrentUser());

  const requestURL = `${BaseUrl}${Endpoints.GetEmailConfigApi}/orgId=${currentUser.organisation.orgId}`;
  console.log('requestURL --> ', requestURL);

  try {
    const userEmailConfigResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(userEmailConfigResponse, '----> userEmailConfigResponse.');
    yield put(Actions.getEmailConfigSuccessAction(userEmailConfigResponse));

  } catch (err) {
    console.log(err, '---> getPartyGroupErrorAction');
    yield put(Actions.getEmailConfigErrorAction(err));
  }
}

// Save email configurations
export function* saveEmailConfigSaga() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());

  const updateUserEmailConfigPostData = yield select(
    Selectors.makeSelectUserEmailConfigPostData(),
  );
  console.log("updateUserEmailConfigPostData: ", updateUserEmailConfigPostData);

  const requestURL = `${BaseUrl}${Endpoints.SaveEmailConfigApi}`;
  console.log('postURL --> ', requestURL);

  try {
    const saveEmailConfigResponse = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(updateUserEmailConfigPostData),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(saveEmailConfigResponse, '----> saveEmailConfigResponse.');
    yield put(Actions.getEmailConfigSuccessAction(saveEmailConfigResponse));

  } catch (err) {
    console.log(err, '---> getPartyGroupErrorAction');
    yield put(Actions.getEmailConfigErrorAction(err));
  }
}


// Individual exports for testing
export default function* emailConfigSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(Constants.GET_EMAIL_CONFIG, getEmailConfigSaga);
  yield takeLatest(Constants.UPDATE_EMAIL_CONFIG, saveEmailConfigSaga);
}
