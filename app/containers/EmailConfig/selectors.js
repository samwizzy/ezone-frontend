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

export default makeSelectEmailConfig;
export { selectEmailConfigDomain };
