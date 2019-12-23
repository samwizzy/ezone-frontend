/*
 *
 * OrgPage actions
 *
 */

import {
  OPEN_EDIT_COLOR_DIALOG,
  CLOSE_EDIT_COLOR_DIALOG,
  OPEN_EDIT_COMPANY_DIALOG,
  CLOSE_EDIT_COMPANY_DIALOG,
  OPEN_NEW_BRANCH_DIALOG,
  CLOSE_NEW_BRANCH_DIALOG,
  OPEN_EDIT_BRANCH_DIALOG,
  CLOSE_EDIT_BRANCH_DIALOG,
  OPEN_NEW_DEPARTMENT_DIALOG,
  CLOSE_NEW_DEPARTMENT_DIALOG,
  OPEN_EDIT_DEPARTMENT_DIALOG,
  CLOSE_EDIT_DEPARTMENT_DIALOG,
} from './constants';

export function openEditColorDialog(data) {
  return {
    type: OPEN_EDIT_COLOR_DIALOG,
    payload: data,
  };
}

export function closeEditColorDialog() {
  return {
    type: CLOSE_EDIT_COLOR_DIALOG,
  };
}

export function openEditCompanyDialog(data) {
  return {
    type: OPEN_EDIT_COMPANY_DIALOG,
    payload: data,
  };
}

export function closeEditCompanyDialog() {
  return {
    type: CLOSE_EDIT_COMPANY_DIALOG,
  };
}

export function openNewBranchDialog() {
  return {
    type: OPEN_NEW_BRANCH_DIALOG,
  };
}

export function closeNewBranchDialog() {
  return {
    type: CLOSE_NEW_BRANCH_DIALOG,
  };
}

export function opeEditBranchDialog(data) {
  return {
    type: OPEN_EDIT_BRANCH_DIALOG,
    payload: data,
  };
}

export function closeEditBranchDialog() {
  return {
    type: CLOSE_EDIT_BRANCH_DIALOG,
  };
}

export function openNewDepartmentDialog() {
  return {
    type: OPEN_NEW_DEPARTMENT_DIALOG,
  };
}

export function closeNewDepartmentDialog() {
  return {
    type: CLOSE_NEW_DEPARTMENT_DIALOG,
  };
}

export function opeEditDepartmentDialog(data) {
  return {
    type: OPEN_EDIT_DEPARTMENT_DIALOG,
    payload: data,
  };
}

export function closeEditDepartmentDialog() {
  return {
    type: CLOSE_EDIT_DEPARTMENT_DIALOG,
  };
}
