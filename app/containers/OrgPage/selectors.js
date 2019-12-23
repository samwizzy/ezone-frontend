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
    subState => subState,
  );

const makeSelectLoading = () =>
  createSelector(
    selectOrgPageDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectOrgPageDomain,
    subState => subState.error,
  );

const makeSelectEditColorDialog = () =>
  createSelector(
    selectOrgPageDomain,
    subState => subState.colorDialog,
  );

const makeSelectEditCompanyDialog = () =>
  createSelector(
    selectOrgPageDomain,
    subState => subState.companyDialog,
  );

export default makeSelectOrgPage;
export {
  selectOrgPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectEditColorDialog,
  makeSelectEditCompanyDialog,
};
