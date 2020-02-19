/*
 *
 * OrgPage reducer
 *
 */
import produce from 'immer';
import * as Constants from './constants';

export const initialState = {
  createNewPartyData: false,
  createNewPartyGroupData: false,
  partyGroupData: false,
  loading: false,
  error: false,
  selectedPartyGroupData: false,
  getAllUsersData: false,
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
  roleDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null
  },
  party: [
    {id: 1, name: 'Region', description: 'Testing out', head: 'Afeez', assistant: 'Sammy'}
  ],
  // Organization initial state
  companyInfo: false,
  updateCompanyInfoData: false,
  message: false,
  colorDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
  companyDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
  branchDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
  departmentDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const companyStructurePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case Constants.OPEN_NEW_PARTY_DIALOG: {
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
      case Constants.OPEN_NEW_ROLE_DIALOG: {
        return {
          ...state,
          roleDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: null,
          },
        };
      }
      case Constants.CLOSE_NEW_ROLE_DIALOG: {
        return {
          ...state,
          roleDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.GET_PARTY_GROUP: {
        console.log('trigger actions from reducer');
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case Constants.GET_PARTY_GROUP_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          partyGroupData: action.payload,
        };
      }
      case Constants.GET_PARTY_GROUP_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case Constants.GET_SELECTED_PARTY_GROUP: {
        return {
          ...state,
          selectedPartyGroupData: action.payload,

        };
      }
      case Constants.CREATE_NEW_PARTY_GROUP: {
        return {
          ...state,
          createNewPartyGroupData: action.payload,
        };
      }
      case Constants.CREATE_NEW_PARTY_GROUP_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          // success: action.payload,
        };
      }
      case Constants.CREATE_NEW_PARTY_GROUP_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case Constants.GET_ALL_USERS: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case Constants.GET_ALL_USERS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          getAllUsersData: action.payload,
        };
      }
      case Constants.GET_ALL_USERS_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case Constants.CREATE_NEW_PARTY: {
        return {
          ...state,
          loading: true,
          error: false,
          createNewPartyData: action.payload,
        };
      }
      case Constants.CREATE_NEW_PARTY_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          // getAllUsersData: action.payload,
        };
      }
      case Constants.CREATE_NEW_PARTY_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      // organization reduce
      case Constants.OPEN_EDIT_COLOR_DIALOG: {
        return {
          ...state,
          colorDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case Constants.CLOSE_EDIT_COLOR_DIALOG: {
        return {
          ...state,
          colorDialog: {
            type: 'edit',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_EDIT_COMPANY_DIALOG: {
        return {
          ...state,
          companyDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case Constants.CLOSE_EDIT_COMPANY_DIALOG: {
        return {
          ...state,
          companyDialog: {
            type: 'edit',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_NEW_BRANCH_DIALOG: {
        return {
          ...state,
          branchDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: null,
          },
        };
      }
      case Constants.CLOSE_NEW_BRANCH_DIALOG: {
        return {
          ...state,
          branchDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_EDIT_BRANCH_DIALOG: {
        return {
          ...state,
          branchDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case Constants.CLOSE_EDIT_BRANCH_DIALOG: {
        return {
          ...state,
          branchDialog: {
            type: 'edit',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_NEW_DEPARTMENT_DIALOG: {
        return {
          ...state,
          departmentDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: null,
          },
        };
      }
      case Constants.CLOSE_NEW_DEPARTMENT_DIALOG: {
        return {
          ...state,
          departmentDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.OPEN_EDIT_DEPARTMENT_DIALOG: {
        return {
          ...state,
          departmentDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case Constants.CLOSE_EDIT_DEPARTMENT_DIALOG: {
        return {
          ...state,
          departmentDialog: {
            type: 'edit',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case Constants.GET_COMPANY_INFO: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case Constants.GET_COMPANY_INFO_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          companyInfo: action.payload,
        };
      }
      case Constants.GET_COMPANY_INFO_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case Constants.UPDATE_COMPANY_INFO: {
        return {
          ...state,
          loading: true,
          error: false,
          updateCompanyInfoData: action.payload,
        };
      }
      case Constants.UPDATE_COMPANY_INFO_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          message: action.payload,
        };
      }
      case Constants.UPDATE_COMPANY_INFO_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
    }
  });

export default companyStructurePageReducer;