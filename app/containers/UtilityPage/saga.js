import { call, put, all, take, select, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import request from '../../utils/request';

import { BaseUrl } from '../../components/BaseUrl';
import {makeSelectAccessToken, makeSelectCurrentUser} from './../App/selectors';
// import * as Selectors from './selectors';
import * as Actions from './actions';
import * as Constants from './constants';
import * as Endpoints from '../../components/Endpoints';

export function* addUtilityTasks(data) {
  console.log(data, "checking data from saga")
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.CreateUtilityTasksApi}`;

  try {
    const createdTasksResponse = yield call(request, requestURL, {
      method: 'POST',
      body: data,
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(createdTasksResponse, "createdTasksResponse")

    yield put(Actions.createUtilityTaskSuccess(createdTasksResponse));
  } catch (err) {
    yield put(Actions.getUtilityTasksError(err));
    console.error(err, "I got the error")
  }
}

export function* getUtilityTasks() {
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.GetUtilityTasksApi}/${user.organisation.id}`;

  console.log(accessToken, "accessToken")
  console.log(user, "Current Users")

  try {
    const utilityTasksResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(utilityTasksResponse, "utilityTasksResponse")

    yield put(Actions.getUtilityTasks(utilityTasksResponse));
  } catch (err) {
    yield put(Actions.getUtilityTasksError(err));
    console.error(err, "I got the error")
  }
}

export function* getUtilityFiles() {
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.GetUtilityFilesApi}/${user.organisation.id}`;

  console.log(accessToken, "accessToken")
  console.log(user, "Current Users")

  try {
    const utilityFilesResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(utilityFilesResponse, "utilityFilesResponse")

    yield put(Actions.getUtilityFiles(utilityFilesResponse));
  } catch (err) {
    yield put(Actions.getUtilityFilesError(err));
  }
}

// Individual exports for testing
export default function* UtilityPageSaga() {
  yield takeLatest(Constants.GET_UTILITY_TASKS, getUtilityTasks);
  yield takeLatest(Constants.GET_UTILITY_FILES, getUtilityFiles);
  yield takeLatest(Constants.CREATE_UTILITY_TASKS, addUtilityTasks);
  // yield all([utilityTasks()])
}