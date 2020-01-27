/*
 *
 * UtilityPage reducer
 *
 */
import produce from 'immer';
import {
  OPEN_FILE_UPLOAD_DIALOG,
  CLOSE_FILE_UPLOAD_DIALOG,
  OPEN_SHARE_FILE_DIALOG,
  CLOSE_SHARE_FILE_DIALOG,
  OPEN_EDIT_COMPANY_DIALOG,
  CLOSE_EDIT_COMPANY_DIALOG,
  OPEN_NEW_BRANCH_DIALOG,
  CLOSE_NEW_BRANCH_DIALOG,
  OPEN_EDIT_BRANCH_DIALOG,
  CLOSE_EDIT_BRANCH_DIALOG,
  OPEN_NEW_DEPARTMENT_DIALOG,
  CLOSE_NEW_DEPARTMENT_DIALOG,
  OPEN_EDIT_DEPARTMENT_DIALOG,
  CLOSE_EDIT_DEPARTMENT_DIALOG,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: [{id: 1, name: 'Samuel', format: 'PDF', size: '12mb', modified_by: 'Christian', date_uploaded: '3rd, Jul 2019'}],
  fileDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null
  },
  shareFileDialog: {
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
const utilityPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case OPEN_FILE_UPLOAD_DIALOG: {
        return {
          ...state,
          fileDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: action.payload
          },
        };
      }
      case CLOSE_FILE_UPLOAD_DIALOG: {
        return {
          ...state,
          fileDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: action.payload,
          },
        };
      }
      case OPEN_SHARE_FILE_DIALOG: {
        return {
          ...state,
          shareFileDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case CLOSE_SHARE_FILE_DIALOG: {
        return {
          ...state,
          shareFileDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case OPEN_EDIT_COMPANY_DIALOG: {
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
      case CLOSE_EDIT_COMPANY_DIALOG: {
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
      case OPEN_NEW_BRANCH_DIALOG: {
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
      case CLOSE_NEW_BRANCH_DIALOG: {
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
      case OPEN_EDIT_BRANCH_DIALOG: {
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
      case CLOSE_EDIT_BRANCH_DIALOG: {
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
      case OPEN_NEW_DEPARTMENT_DIALOG: {
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
      case CLOSE_NEW_DEPARTMENT_DIALOG: {
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
      case OPEN_EDIT_DEPARTMENT_DIALOG: {
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
      case CLOSE_EDIT_DEPARTMENT_DIALOG: {
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
    }
  });

export default utilityPageReducer;
