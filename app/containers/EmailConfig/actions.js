/*
 *
 * EmailConfig actions
 *
 */

import * as Constants from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

// Get email configuration details
export function getEmailConfigAction(data) {
  console.log(data, 'getEmailConfigAction');
  return {
    type: Constants.GET_EMAIL_CONFIG,
    payload: data,
  };
}

export function getEmailConfigSuccessAction(data) {
  console.log(data, 'getEmailConfigSuccessAction');
  return {
    type: Constants.GET_EMAIL_CONFIG_SUCCESS,
    payload: data,
  };
}

export function getEmailConfigErrorAction(data) {
  console.log(data, 'getEmailConfigErrorAction');
  return {
    type: Constants.GET_EMAIL_CONFIG_ERR,
    payload: data,
  };
}


// Set email configuration details
export function updateEmailConfigAction(data) {
  console.log(data, 'updateEmailConfigAction');
  return {
    type: Constants.UPDATE_EMAIL_CONFIG,
    payload: data,
  };
}

export function updateEmailConfigSuccessAction(data) {
  console.log(data, 'updateEmailConfigSuccessAction');
  return {
    type: Constants.UPDATE_EMAIL_CONFIG_SUCCESS,
    payload: data,
  };
}

export function updateEmailConfigErrorAction(data) {
  console.log(data, 'updateEmailConfigErrorAction');
  return {
    type: Constants.UPDATE_EMAIL_CONFIG_ERR,
    payload: data,
  };
}

