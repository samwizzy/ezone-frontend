/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLoginDetails = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loginDetails,
  );

const makeSelectAccessToken = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.accessToken,
  );

const makeSelectSaveToken = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.saveToken,
  );

const makeSelectGetSaveToken = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.getSaveToken,
  );

// const tok = localStorage.getItem('token');
// console.log(tok, 'toktoktoktok');

const makeSelectUserToken = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tokens,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.user,
  );

// const makeSelectRepos = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.userData.repositories,
//   );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  // makeSelectLoginDetails,
  makeSelectUserToken,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  // makeSelectRepos,
  makeSelectLocation,


  makeSelectLoginDetails,
  makeSelectAccessToken,
  makeSelectSaveToken,
  makeSelectGetSaveToken,
};
