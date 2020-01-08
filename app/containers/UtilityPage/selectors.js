import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the utility state domain
 */

const selectUtilityPageDomain = state => state.utilityPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UtilityPage
 */

const makeSelectUtilityPage = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState,
  );

const makeSelectLoading = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.error,
  );

const makeSelectEditColorDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.colorDialog,
  );

const makeSelectEditCompanyDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.companyDialog,
  );

const makeSelectBranchDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.branchDialog,
  );

const makeSelectDepartmentDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.departmentDialog,
  );

// const makeSelectNewBranchDialog = () =>
//   createSelector(
//     selectUtilityPageDomain,
//     subState => subState.branchDialog,
//   );

// const makeSelectEditBranchDialog = () =>
//   createSelector(
//     selectUtilityPageDomain,
//     subState => subState.branchDialog,
//   );

export default makeSelectUtilityPage;
export {
  selectUtilityPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectEditColorDialog,
  makeSelectEditCompanyDialog,
  makeSelectBranchDialog,
  makeSelectDepartmentDialog,
  // makeSelectNewBranchDialog,
  // makeSelectEditBranchDialog,
};
