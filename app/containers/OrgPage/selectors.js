import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orgPage state domain
 */

const selectOrgPageDomain = state => state.orgPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrgPage
 */

const makeSelectOrgPage = () =>
  createSelector(
    selectOrgPageDomain,
    substate => substate,
  );

export default makeSelectOrgPage;
export { selectOrgPageDomain };
