import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the companyStructurePage state domain
 */

const selectCompanyStructurePageDomain = state => state.companyStructurePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CompanyStructurePage
 */

const makeSelectCompanyStructurePage = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.error,
  );

const makeSelectNewPartyGroupDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.newPartyGroupDialog,
  );

const makeSelectNewPartyDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.newPartyDialog,
  );

const makeSelectRoleDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.roleDialog,
  );

const makeSelectParty = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.party,
  );

const makeSelectPartyGroupData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.partyGroupData,
  );

const makeSelectSelectedPartyGroupData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.selectedPartyGroupData,
  );

const createNewPartyGroupData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.createNewPartyGroupData,
  );

const makeSelectAllUsersData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.getAllUsersData,
  );

const makeSelectCreateNewPartyData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.createNewPartyData,
  );

// const makeSelectSelectedParty = () =>
//   createSelector(
//     selectCompanyStructurePageDomain,
//     subState => subState.selectedParty,
//   );

// organization selectors
const makeSelectEditColorDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.colorDialog,
  );

const makeSelectEditCompanyDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.companyDialog,
  );

const makeSelectBranchDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.branchDialog,
  );

const makeSelectDepartmentDialog = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.departmentDialog,
  );

const makeSelectCompanyInfo = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.companyInfo,
  );

const makeSelectUpdateCompanyInfoData = () =>
  createSelector(
    selectCompanyStructurePageDomain,
    subState => subState.updateCompanyInfoData,
  );


export default makeSelectCompanyStructurePage;
export {
  selectCompanyStructurePageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectNewPartyGroupDialog,
  makeSelectNewPartyDialog,
  makeSelectRoleDialog,
  makeSelectParty,
  makeSelectPartyGroupData,
  makeSelectSelectedPartyGroupData,
  createNewPartyGroupData,
  makeSelectAllUsersData,
  makeSelectCreateNewPartyData,
  // makeSelectSelectedParty,
  // organization export function
  makeSelectEditColorDialog,
  makeSelectEditCompanyDialog,
  makeSelectBranchDialog,
  makeSelectDepartmentDialog,
  makeSelectCompanyInfo,
  makeSelectUpdateCompanyInfoData,
};
