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

const makeSelectData = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.data,
  );

const makeSelectFileUploadDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.fileDialog,
  );

const makeSelectError = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.error,
  );

const makeSelectSharedFileDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.shareFileDialog,
  );

const makeSelectNewTaskDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.taskDialog,
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

export default makeSelectUtilityPage;
export {
  selectUtilityPageDomain,
  makeSelectLoading,
  makeSelectData,
  makeSelectFileUploadDialog,
  makeSelectSharedFileDialog,
  makeSelectError,
  makeSelectNewTaskDialog,
  makeSelectBranchDialog,
  makeSelectDepartmentDialog
};
