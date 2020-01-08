/*
 *
 * EmployeePage actions
 *
 */

import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  OPEN_EDIT_EMPLOYEE_DIALOG,
  CLOSE_EDIT_EMPLOYEE_DIALOG,
  OPEN_VIEW_EMPLOYEE_DIALOG,
  CLOSE_VIEW_EMPLOYEE_DIALOG,
} from './constants';

export function openNewEmployeeDialog() {
  return {
    type: OPEN_NEW_EMPLOYEE_DIALOG,
  };
}

export function closeNewEmployeeDialog() {
  return {
    type: CLOSE_NEW_EMPLOYEE_DIALOG,
  };
}

export function openEditEmployeeDialog(data) {
  return {
    type: OPEN_EDIT_EMPLOYEE_DIALOG,
    payload: data,
  };
}

export function closeEditEmployeeDialog() {
  return {
    type: CLOSE_EDIT_EMPLOYEE_DIALOG,
  };
}

export function openViewEmployeeDialog(data) {
  return {
    type: OPEN_VIEW_EMPLOYEE_DIALOG,
    payload: data,
  };
}

export function closeViewEmployeeDialog() {
  return {
    type: CLOSE_VIEW_EMPLOYEE_DIALOG,
  };
}
