/**
 *
 * EmployeePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEmployeePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import TabsPage from './components/TabsPage';
import EmployeeDialog from './components/EmployeeDialog';

export function EmployeePage() {
  useInjectReducer({ key: 'employeePage', reducer });
  useInjectSaga({ key: 'employeePage', saga });

  return (
    <div>
      <Helmet>
        <title>EmployeePage</title>
        <meta name="description" content="Description of EmployeePage" />
      </Helmet>
      <TabsPage />
      <EmployeeDialog />
    </div>
  );
}

EmployeePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeePage: makeSelectEmployeePage(),
});

function mapDispatchToProps(dispatch) {
  return {
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
