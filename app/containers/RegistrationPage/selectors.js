import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registrationPage state domain
 */

const selectRegistrationPageDomain = state =>
  state.registrationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegistrationPage
 */

const makeSelectRegistrationPage = () =>
  createSelector(
    selectRegistrationPageDomain,
    substate => substate,
  );

const makeSelectSignupReqData = () =>
  createSelector(
    selectRegistrationPageDomain,
    substate => substate.signupReqData,
  );

const makeSelectSignupResData = () =>
  createSelector(
    selectRegistrationPageDomain,
    substate => substate.signupResData,
  );

const makeSelectLoading = () =>
  createSelector(
    selectRegistrationPageDomain,
    substate => substate.loading,
  );

export default makeSelectRegistrationPage;
export {
  selectRegistrationPageDomain,
  makeSelectSignupReqData,
  makeSelectSignupResData,
  makeSelectLoading,
};
