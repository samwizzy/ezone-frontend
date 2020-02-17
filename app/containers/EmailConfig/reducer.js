/*
 *
 * EmailConfig reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

import { DEFAULT_ACTION } from './constants';

export const initialState = {
  emailConfigData: false,
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const emailConfigReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case Constants.GET_EMAIL_CONFIG: {
        return {
          ...state,
          loading: false,
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
    }
  });



export default emailConfigReducer;
