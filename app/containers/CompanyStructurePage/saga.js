
import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as Selectors from '../App/selectors';
import { BaseUrl } from '../../components/BaseUrl';
import request from '../../utils/request';
import * as Endpoints from '../../components/Endpoints';
import * as Actions from './actions';
import * as Constants from './constants';


export function* getPartyGroupSaga() {
  const accessToken = yield select(Selectors.makeSelectAccessToken());
  const currentUser = yield select(Selectors.makeSelectCurrentUser());

  console.log(accessToken, 'saga accessToken');
  console.log(currentUser, 'saga currentUser');

  const requestURL = `${BaseUrl}${Endpoints.GetPartyGroup}?orgId=${currentUser.organisation.orgId}`;

  console.log(`orgId: --> ${currentUser.organisation.orgId}`)
  console.log(requestURL, ' --> requestURL........');

  try {
    const userPartyGroupResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });

    console.log(userPartyGroupResponse, '----> userPartyGroupResponse.');
    yield put(Actions.getPartyGroupSuccessAction(userPartyGroupResponse));

  } catch (err) {
    console.log(err, '---> getPartyGroupErrorAction');
    yield put(Actions.getPartyGroupErrorAction(err));
  }
}

export function* createNewPartyGroupSaga() {
  const accessToken = yield select(Selectors.makeSelectAccessToken());
  const currentUser = yield select(Selectors.makeSelectCurrentUser());

  const createNewPartyGroupParams = yield select(Selectors.createNewPartyGroupData());

  console.log(accessToken, 'saga accessToken');
  console.log(currentUser, 'saga currentUser');
  console.log(JSON.stringify(createNewPartyGroupParams), 'createNewPartyGroupParams');

  const requestURL = `${BaseUrl}${Endpoints.CreateNewPartyGroup}`;

  console.log(`orgId: --> ${currentUser.organisation.orgId}`)
  console.log(requestURL, ' -> requestURL........');

  try {
    const createPartyGroupResponse = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(createNewPartyGroupParams),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/Json',
      }),
    });

    console.log(createPartyGroupResponse, '----> createPartyGroupResponse.');
    yield put(Actions.createNewPartyGroupSuccessAction(createPartyGroupResponse));

  } catch (err) {
    console.log(err, '---> createNewPartyGroupErrorAction');
    yield put(Actions.createNewPartyGroupErrorAction(err));
  }
}

// Individual exports for testing
export default function* companyStructureSaga() {
  yield takeLatest(Constants.GET_PARTY_GROUP, getPartyGroupSaga);
  yield takeLatest(Constants.CREATE_NEW_PARTY_GROUP, createNewPartyGroupSaga);
}
