/*
 *
 * EmployeePage reducer
 *
 */
import produce from 'immer';
import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  OPEN_EDIT_EMPLOYEE_DIALOG,
  CLOSE_EDIT_EMPLOYEE_DIALOG,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  employeeDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const employeePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case OPEN_NEW_EMPLOYEE_DIALOG: {
        return {
          ...state,
          employeeDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case CLOSE_NEW_EMPLOYEE_DIALOG: {
        return {
          ...state,
          employeeDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: action.payload,
          },
        };
      }
      case OPEN_EDIT_EMPLOYEE_DIALOG: {
        return {
          ...state,
          employeeDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case CLOSE_EDIT_EMPLOYEE_DIALOG: {
        return {
          ...state,
          employeeDialog: {
            type: 'edit',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
    }
  });

export default employeePageReducer;
