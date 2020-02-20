import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as AppActions from '../App/actions';
import * as AppSelectors from '../App/selectors';
import * as Selectors from './selectors';
import { BaseUrl } from '../../components/BaseUrl';
import request from '../../utils/request';
import * as Endpoints from '../../components/Endpoints';
import * as Actions from './actions';
import * as Constants from './constants';

export function* getPartyGroupSaga() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const currentUser = yield select(AppSelectors.makeSelectCurrentUser());

  const requestURL = `${BaseUrl}${Endpoints.GetPartyGroup}?orgId=${
    currentUser.organisation.orgId
  }`;

  try {
    const userPartyGroupResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    yield put(Actions.getPartyGroupSuccessAction(userPartyGroupResponse));
  } catch (err) {
    yield put(Actions.getPartyGroupErrorAction(err));
  }
}

export function* createNewPartyGroupSaga() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const currentUser = yield select(AppSelectors.makeSelectCurrentUser());

  const createNewPartyGroupParams = yield select(
    Selectors.createNewPartyGroupData(),
  );

  const requestURL = `${BaseUrl}${Endpoints.CreateNewPartyGroup}`;

  try {
    const userPartyGroupResponse = yield call(request, requestURL, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/Json',
      }),
    });

    console.log(userPartyGroupResponse, '----> userPartyGroupResponse.');
    yield put(Actions.getPartyGroupSuccessAction(userPartyGroupResponse));
  } catch (err) {
    console.log(err, '---> getPartyGroupErrorAction');
    yield put(Actions.getPartyGroupErrorAction(err));
  }
}

export function* getAllUsers() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());

  const requestURL = `${BaseUrl}${Endpoints.GetAllUsersApi}`;

  try {
    const getAllUsersResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(getAllUsersResponse, 'getAllUsersResponse');

    yield put(Actions.getAllUsersSuccess(getAllUsersResponse));
  } catch (err) {
    yield put(Actions.getAllUsersError(err));
  }
}

export function* createNewParty() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const currentUser = yield select(AppSelectors.makeSelectCurrentUser());
  const createNewPartyData = yield select(
    Selectors.makeSelectCreateNewPartyData(),
  );

  console.log(createNewPartyData, 'createNewPartyData');
  const requestURL = `${BaseUrl}${Endpoints.CreateNewPartyApi}`;

  try {
    const createNewPartyResponse = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(createNewPartyData),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    console.log(createNewPartyResponse, 'createNewPartyResponse');

    yield put(Actions.createNewPartySuccess(createNewPartyResponse));
  } catch (err) {
    yield put(Actions.createNewPartyError(err));
  }
}

// Organization Info Saga
export function* companyDetail() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const currentUser = yield select(AppSelectors.makeSelectCurrentUser());

  const requestURL = `${BaseUrl}${Endpoints.CompanyInfoUrl}/${
    currentUser.organisation.orgId
  }`;

  try {
    const companyDetailResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    yield put(Actions.getCompanyInfoSuccess(companyDetailResponse));
  } catch (err) {
    yield put(Actions.getCompanyInfoError(err));
  }
}

export function* updateCompanyDetail() {
  const accessToken = yield select(AppSelectors.makeSelectAccessToken());
  const updateCompanyInfoData = yield select(
    Selectors.makeSelectUpdateCompanyInfoData(),
  );
  const requestURL = `${BaseUrl}${Endpoints.UpdateCompanyInfoUrl}`;

  try {
    const companyDetailResponse = yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify(updateCompanyInfoData),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
    });

    yield put(Actions.getCompanyInfo());
    yield put(Actions.updateCompanyInfoSuccess(companyDetailResponse));
    yield put(Actions.closeEditCompanyDialog());
    yield put(
      AppActions.openSnackBar({
        open: true,
        message: 'Company Profile Update Successfully',
        status: 'success',
      }),
    );
  } catch (err) {
    yield put(Actions.updateCompanyInfoError(err));
    yield put(
      AppActions.openSnackBar({
        open: true,
        message: err.message,
        status: 'error',
      }),
    );
  }
}

// Individual exports for testing
export default function* companyStructureSaga() {
  yield takeLatest(Constants.GET_PARTY_GROUP, getPartyGroupSaga);
  yield takeLatest(Constants.GET_ALL_USERS, getAllUsers);
  yield takeLatest(Constants.CREATE_NEW_PARTY, createNewParty);
  // Organization Info
  yield takeLatest(Constants.GET_COMPANY_INFO, companyDetail);
  yield takeLatest(Constants.UPDATE_COMPANY_INFO, updateCompanyDetail);
}
