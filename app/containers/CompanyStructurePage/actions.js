/*
 *
 * OrgPage actions
 *
 */

import * as Constants from './constants';

export function openNewPartyDialog() {
  return {
    type: Constants.OPEN_NEW_PARTY_DIALOG,
  };
}

export function closeNewPartyDialog() {
  return {
    type: Constants.CLOSE_NEW_PARTY_DIALOG,
  };
}

export function openNewSubGroupDialog() {
  return {
    type: Constants.OPEN_NEW_SUB_PARTY_DIALOG,
  };
}

export function closeNewSubGroupDialog() {
  return {
    type: Constants.CLOSE_NEW_SUB_PARTY_DIALOG,
  };
}

export function openNewRoleDialog() {
  return {
    type: Constants.OPEN_NEW_ROLE_DIALOG,
  };
}

export function closeNewRoleDialog() {
  return {
    type: Constants.CLOSE_NEW_ROLE_DIALOG,
  };
}
