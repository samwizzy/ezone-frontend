/*
 *
 * RegistrationPage actions
 *
 */

import * as Constants from './constants';

export function signupRequest(data) {
  return {
    type: Constants.SIGNUP_REQUEST,
    payload: data,
  };
}

export function signupSuccessRequest(data) {
  return {
    type: Constants.SIGNUP_SUCCESS_REQUEST,
    payload: data,
  };
}

export function signupErrorRequest(data) {
  return {
    type: Constants.SIGNUP_ERROR_REQUEST,
    payload: data,
  };
}
