/*
 *
 * OrgPage reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

export const initialState = {
  loading: false,
  error: false,
  partyDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null
  },
  subPartyDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null
  },
};

/* eslint-disable default-case, no-param-reassign */
const companyStructurePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.OPEN_NEW_PARTY_DIALOG: {
        console.log("I have just hit the reducer for new party dialog")
        return {
          ...state,
          partyDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: null
          },
        };
      }
      case Constants.CLOSE_NEW_PARTY_DIALOG: {
        return {
          ...state,
          partyDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_NEW_SUB_PARTY_DIALOG: {
        console.log('come to reducer')
        return {
          ...state,
          subPartyDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: null,
          },
        };
      }
      case Constants.CLOSE_NEW_SUB_PARTY_DIALOG: {
        return {
          ...state,
          subPartyDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
    }
  });

export default companyStructurePageReducer;
