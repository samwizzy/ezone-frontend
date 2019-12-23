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
