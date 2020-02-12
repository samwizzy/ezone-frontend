import { call, put, take, select, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import request from '../../utils/request';

import { BaseUrl } from '../../components/BaseUrl';
import {makeSelectAccessToken} from './../App/selectors';
import * as Selectors from './selectors';
import * as Actions from './actions';
import * as Constants from './constants';
import * as Endpoints from '../../components/Endpoints';

// export default function* UtilityPageSaga() {
//   console.log("I am going home")
// }

// export function* orgFiles() {
//   const accessToken = yield select(makeSelectAccessToken());
//   console.log(accessToken, "I am on fiore access")

//   const requestURL = `${BaseUrl}${Endpoints.GetOrgAppsApi}`;

//   try {
//     const orgAppsResponse = yield call(request, requestURL, {
//       method: 'GET',
//       headers: new Headers({
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       }),
//     });

//     console.log(orgAppsResponse, 'loginResponse profile');

//     yield put(Actions.getUserProfileSuccessAction(orgAppsResponse));
//   } catch (err) {
//     console.log(err, 'err user profile');
//     yield put(Actions.getUserProfileErrorAction(err));
//   }
// }

export function* utilityTasks() {
  const accessToken1 = yield select(makeSelectAccessToken());
  const accessToken = '2b31a1b2-3178-49db-8dad-708ab3d9587f';
  console.log(accessToken1, "I am in task saga shit")
  const requestURL = `${BaseUrl}${Endpoints.GetUtilityTasksApi}/${orgid}`;

  try {
    const utilityTaskResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    yield put(Actions.getUtilityTasks(utilityTaskResponse));
  } catch (err) {
    // yield put(Actions.getUserProfileErrorAction(err));
    console.log(err, "Error from utility")
  }
}

// export function* utilityTasks() {
//   const accessToken = yield select(makeSelectAccessToken());
//   const requestURL = `${BaseUrl}${Endpoints.GetOrgAppsApi}`;

//   try {
//     const orgAppsResponse = yield call(request, requestURL, {
//       method: 'GET',
//       headers: new Headers({
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       }),
//     });

//     yield put(Actions.getUserProfileSuccessAction(orgAppsResponse));
//   } catch (err) {
//     yield put(Actions.getUserProfileErrorAction(err));
//   }
// }

// Individual exports for testing
export default function* UtilityPageSaga() {
  yield takeLatest(Constants.GET_UTILITY_TASKS, utilityTasks);
  // yield takeLatest(Constants.GET_UTILITY_APPS, orgFiles);
  // yield takeLatest(Constants.GET_UTILITY_FILES, orgFiles);
  // yield takeLatest(Constants.GET_UTILITY_CHATS, orgFiles);
}