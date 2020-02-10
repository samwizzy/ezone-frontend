/*
 *
 * OrgPage actions
 *
 */

import * as Constants from './constants';
import { func } from 'prop-types';

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


export function getPartyGroupAction() {
  console.log('trigger actions');
  return {
    type: Constants.GET_PARTY_GROUP,
  };
}

export function getPartyGroupSuccessAction(data) {
  return {
    type: Constants.GET_PARTY_GROUP_SUCCESS,
    payload: data,
  };
}

export function getPartyGroupErrorAction(data) {
  return {
    type: Constants.GET_PARTY_GROUP_ERROR,
    payload: data,
  };
}


