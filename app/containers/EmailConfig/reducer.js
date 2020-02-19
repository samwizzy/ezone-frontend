/*
 *
 * EmailConfig reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

export const initialState = {
  emailConfigData: false,
  emailConfigPostData: false,
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const emailConfigReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.GET_EMAIL_CONFIG: {
        return {
          ...state,
          loading: true,
          error: false,
          emailConfigData: action.payload,
        };
      }
      case Constants.GET_EMAIL_CONFIG_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          emailConfigData: action.payload,
        };
      }
      case Constants.GET_EMAIL_CONFIG_ERR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }

      case Constants.UPDATE_EMAIL_CONFIG: {
        console.log(action.payload, 'action.payload');
        // console.log("action.payload: ", action.payload)
        return {
          ...state,
          loading: true,
          error: false,
          emailConfigPostData: action.payload
        };
      }

      case Constants.UPDATE_EMAIL_CONFIG_SUCCESS: {
        console.log("action.payload success msg: ", action.payload)
        return {
          ...state,
          loading: false,
          error: false,
          emailConfigPostData: action.payload
        };
      }

      case Constants.UPDATE_EMAIL_CONFIG_ERR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
    }
  });



export default emailConfigReducer;
