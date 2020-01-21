/*
 *
 * LoginPage actions
 *
 */

import * as Constants from './constants';

export function loginAction(data) {
  return {
    type: Constants.LOGIN,
    payload: data,
  };
}

export function loginSuccessAction(data) {
  return {
    type: Constants.LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginErrorAction(data) {
  return {
    type: Constants.LOGIN_ERROR,
    payload: data,
  };
}
