/*
 *
 * OrgPage actions
 *
 */

import * as Constants from './constants';

export function openNewPartyDialog() {
  console.log("I have just clicked on the party dialog action")
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
  console.log('openSubGroupDialog');
  return {
    type: Constants.OPEN_NEW_SUB_PARTY_DIALOG,
  };
}

export function closeNewSubGroupDialog() {
  console.log('closeSubGroupDialog');
  return {
    type: Constants.CLOSE_NEW_SUB_PARTY_DIALOG,
  };
}
