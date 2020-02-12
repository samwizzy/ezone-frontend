
import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as Selectors from '../App/selectors';
import * as Endpoints from '../../components/Endpoints';
import * as Actions from './actions';
import * as Constants from './constants';


export function* getPartyGroupSaga() {
  const accessToken = yield select(Selectors.makeSelectAccessToken());
  const currentUser = yield select(Selectors.makeSelectCurrentUser());

  console.log(currentUser, 'currentUser');

  const requestURL = `${BaseUrl}${Endpoints.GetPartyGroup}`;

  try {
    const userPartyGroupResponse = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
    console.log(userPartyGroupResponse, 'userPartyGroupResponse');
    // yield put(Actions.loginSuccessAction(userProfileResponse));

    yield put(Actions.getPartyGroupSuccessAction(userPartyGroupResponse));
  } catch (err) {
    console.log(err, '---> getPartyGroupErrorAction');
    yield put(Actions.getPartyGroupErrorAction(err));
  }
}

// Individual exports for testing
export default function* companyStructureSaga() {
  yield takeLatest(Constants.GET_PARTY_GROUP, getPartyGroupSaga);
}