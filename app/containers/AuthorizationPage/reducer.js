/*
 *
 * AuthorizationPage reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

export const initialState = {
  signupReqData: '',
  loading: false,
  error: false,
  signupResData: '',
};

/* eslint-disable default-case, no-param-reassign */
const authorizationPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.SIGNUP_REQUEST: {
        return {
          ...state,
          loading: true,
          error: false,
          signupReqData: action.payload,
        };
      }
      case Constants.SIGNUP_SUCCESS_REQUEST: {
        return {
          ...state,
          loading: false,
          error: false,
          signupResData: action.payload,
        };
      }
      case Constants.SIGNUP_ERROR_REQUEST: {
        return {
          ...state,
          loading: false,
          error: true,
          signupResData: action.payload,
        };
      }
    }
  });

export default authorizationPageReducer;
