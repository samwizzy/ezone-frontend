/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

export const initialState = {
  loading: false,
  error: false,
  user: {},
  loginDetails: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.LOGIN: {
        console.log(action.payload, 'reducer payload');
        return {
          loading: true,
          error: false,
          loginDetails: action.payload,
        };
      }
      case Constants.LOGIN_SUCCESS: {
        return {
          loading: false,
          error: false,
          user: action.payload,
        };
      }
      case Constants.LOGIN_ERROR: {
        return {
          loading: false,
          error: true,
        };
      }
    }
  });

export default loginPageReducer;
