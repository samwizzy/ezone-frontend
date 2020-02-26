import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the emailConfig state domain
 */

const selectEmailConfigDomain = state => state.emailConfig || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmailConfig
 */

const makeSelectEmailConfig = () =>
  createSelector(
    selectEmailConfigDomain,
    substate => substate,
  );

const makeSelectUserEmailConfigData = () =>
  createSelector(
    selectEmailConfigDomain,
    subState => subState.emailConfigData,
);

const makeSelectUserEmailConfigPostData = () =>
  createSelector(
    selectEmailConfigDomain,
    subState => subState.emailConfigPostData,
);

const makeSelectUserTestConnectionData = () =>
  createSelector(
    selectEmailConfigDomain,
    subState => subState.testConnectionData,
);

const makeSelectSmsProviderData = () =>
  createSelector(
    selectEmailConfigDomain,
    subState => subState.smsProviderData,
);

const makeSelectLoading = () =>
  createSelector(
    selectEmailConfigDomain,
    subState => subState.loading,
);

export default makeSelectEmailConfig;
export { 
  selectEmailConfigDomain,
  makeSelectUserEmailConfigData,
  makeSelectUserEmailConfigPostData,
  makeSelectUserTestConnectionData,
  makeSelectSmsProviderData,
  makeSelectLoading
};

