/**
 *
 * EmployeePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEmployeePage from '../selectors';
import * as Actions from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import EmployeeDialog from './components/EmployeeDialog';
import EmployeeList from './components/EmployeeList';
import AddButton from './components/AddButton';

export function EmployeePage(props) {
  useInjectReducer({ key: 'usersPage', reducer });
  useInjectSaga({ key: 'usersPage', saga });

  const { dispatchGetAllEmployeesAction } = props;

  useEffect(() => {
    dispatchGetAllEmployeesAction();
  }, []);

  return (
    <div>
      <Helmet>
        <title>EmployeePage</title>
        <meta name="description" content="Description of EmployeePage" />
      </Helmet>
      <EmployeeList />
      <EmployeeDialog />
    </div>
  );
}

EmployeePage.propTypes = {
  dispatchGetAllEmployeesAction: PropTypes.func,
  openNewEmployeeDialogAction: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeePage: makeSelectEmployeePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetAllEmployeesAction: () => dispatch(Actions.getAllEmployees()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EmployeePage);
