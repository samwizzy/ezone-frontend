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

const makeSelectTaskData = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.data1,
  );

const makeSelectFileUploadDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.fileUploadDialog,
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

const makeSelectNewFileDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.fileDialog,
  );

const makeSelectNewTaskDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.taskDialog,
  );

const makeSelectPreviewTaskDialog = () =>
  createSelector(
    selectUtilityPageDomain,
    subState => subState.previewTaskDialog,
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
  makeSelectTaskData,
  makeSelectFileUploadDialog,
  makeSelectNewTaskDialog,
  makeSelectPreviewTaskDialog,
  makeSelectSharedFileDialog,
  makeSelectError,
  makeSelectNewFileDialog,
  makeSelectBranchDialog,
  makeSelectDepartmentDialog
};
