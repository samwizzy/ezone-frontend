import { call, put, all, take, select, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import request from '../../utils/request';

import { BaseUrl } from '../../components/BaseUrl';
import {makeSelectAccessToken, makeSelectCurrentUser} from './../App/selectors';
// import * as Selectors from './selectors';
import * as Actions from './actions';
import * as AppActions from '../App/actions';
import * as Constants from './constants';
import * as Endpoints from '../../components/Endpoints';

export function* addUtilityFile({type, payload}) {
  console.log(payload, "checking data from saga")
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.CreateUtilityFilesApi}`;
  payload.orgId = user.organisation.orgId;

  try {
    const createdFileResponse = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(createdFileResponse, "createdFileResponse")

    yield put(Actions.createUtilityFileSuccess(createdFileResponse));
  } catch (err) {
    yield put(Actions.getUtilityFilesError(err));
    console.error(err, "I got the error")
  }
}

export function* addUtilityTasks({type, payload}) {
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.CreateUtilityTasksApi}`;
  payload.orgId = user.organisation.orgId;
  console.log(payload, "Task Payloader")
  try {
    const createdTasksResponse = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(createdTasksResponse, "createdTasksResponse")

    // yield put(Actions.createUtilityFileSuccess(createdTasksResponse));
    yield put({type: Constants.GET_UTILITY_TASKS});
    yield put(
      AppActions.openSnackBar({
        open: true,
        message: `${createdTasksResponse.title} has been created successfully`,
        status: 'success',
      }),
    );
  } catch (err) {
    yield put(Actions.getUtilityTasksError(err));
    console.error(err, "I got the error")
  }
}

export function* getUtilityTasks() {
  const accessToken = yield select(makeSelectAccessToken());
  const user = yield select(makeSelectCurrentUser());
  const requestURL = `${BaseUrl}${Endpoints.GetUtilityTasksApi}/${user.organisation.orgId}`;

  console.log(accessToken, "accessToken")
  console.log(user, "Current Users")

  try {
    const utilityTasksResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(utilityTasksResponse, "utilityTasksResponse")

    yield put(Actions.getUtilityTasksSuccess(utilityTasksResponse));
  } catch (err) {
    // yield put(Actions.getUtilityTasksError(err));
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

export function* getEmployees() {
  const accessToken = yield select(makeSelectAccessToken());
  const requestURL = `${BaseUrl}${Endpoints.GetEmployeesApi}`;

  try {
    const employeesResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    yield put(Actions.getEmployeesSuccess(employeesResponse));
  } catch (err) {
    // yield put(Actions.getUtilityTasksError(err));
    console.error(err, "I got the error")
  }
}

// Individual exports for testing
export default function* UtilityPageSaga() {
  // yield all([getUtilityTasks()])
  yield takeLatest(Constants.GET_EMPLOYEES, getEmployees);
  yield takeLatest(Constants.GET_UTILITY_TASKS, getUtilityTasks);
  yield takeLatest(Constants.GET_UTILITY_FILES, getUtilityFiles);
  yield takeLatest(Constants.CREATE_UTILITY_TASKS, addUtilityTasks);
  yield takeLatest(Constants.CREATE_UTILITY_FILES, addUtilityFile);
}