import produce from 'immer';
import * as Constants from './constants';

// let userActive = JSON.parse(localStorage.getItem('user'));

let userActive;
if (!JSON.parse(localStorage.getItem('user'))) {
  userActive = false;
} else {
  userActive = JSON.parse(localStorage.getItem('user'));
}

let userToken;
if (!localStorage.getItem('access_token')) {
  userToken = false;
} else {
  userToken = localStorage.getItem('access_token');
}

export const initialState = {
  loading: false,
  error: false,
  // user: userActive,
  user: userActive,
  loginDetails: {},
  // accessToken: false,
  accessToken: userToken,
  saveToken: false,
  getSaveToken: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.LOGIN: {
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
          // user: action.payload,
        };
      }
      case Constants.LOGIN_ERROR: {
        return {
          loading: false,
          error: true,
        };
      }
      case Constants.GET_USER_PROFILE: {
        localStorage.setItem('access_token', action.payload.access_token);
        localStorage.setItem('refresh_token', action.payload.refresh_token);
        return {
          loading: true,
          error: false,
          accessToken: localStorage.getItem('access_token'),
        };
      }
      case Constants.GET_USER_PROFILE_SUCCESS: {
        localStorage.setItem('user', JSON.stringify(action.payload));
        return {
          loading: false,
          error: false,
          user: JSON.parse(localStorage.getItem('user')),
          accessToken: localStorage.getItem('access_token'),
        };
      }
      case Constants.GET_USER_PROFILE_ERROR: {
        return {
          loading: false,
          error: action.payload,
        };
      }
    }
  });

export default appReducer;
