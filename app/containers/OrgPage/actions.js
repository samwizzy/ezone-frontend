/*
 *
 * OrgPage actions
 *
 */

import * as Constants from './constants';

export function openEditColorDialog(data) {
  return {
    type: Constants.OPEN_EDIT_COLOR_DIALOG,
    payload: data,
  };
}

export function closeEditColorDialog() {
  return {
    type: Constants.CLOSE_EDIT_COLOR_DIALOG,
  };
}

export function openEditCompanyDialog(data) {
  return {
    type: Constants.OPEN_EDIT_COMPANY_DIALOG,
    payload: data,
  };
}

export function closeEditCompanyDialog() {
  return {
    type: Constants.CLOSE_EDIT_COMPANY_DIALOG,
  };
}

export function openNewBranchDialog() {
  return {
    type: Constants.OPEN_NEW_BRANCH_DIALOG,
  };
}

export function closeNewBranchDialog() {
  return {
    type: Constants.CLOSE_NEW_BRANCH_DIALOG,
  };
}

export function opeEditBranchDialog(data) {
  return {
    type: Constants.OPEN_EDIT_BRANCH_DIALOG,
    payload: data,
  };
}

export function closeEditBranchDialog() {
  return {
    type: Constants.CLOSE_EDIT_BRANCH_DIALOG,
  };
}

export function openNewDepartmentDialog() {
  return {
    type: Constants.OPEN_NEW_DEPARTMENT_DIALOG,
  };
}

export function closeNewDepartmentDialog() {
  return {
    type: Constants.CLOSE_NEW_DEPARTMENT_DIALOG,
  };
}

export function opeEditDepartmentDialog(data) {
  return {
    type: Constants.OPEN_EDIT_DEPARTMENT_DIALOG,
    payload: data,
  };
}

export function closeEditDepartmentDialog() {
  return {
    type: Constants.CLOSE_EDIT_DEPARTMENT_DIALOG,
  };
}
