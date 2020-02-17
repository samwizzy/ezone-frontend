/*
 *
 * EmailConfig actions
 *
 */

import * as Constants from './constants';
import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

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

