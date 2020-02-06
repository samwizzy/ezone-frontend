/**
 *
 * OrgPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectOrgPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import TabsPage from './components/TabsPage';
import ColorDialog from './components/ColorDialog';
import CompanyDialog from './components/CompanyDialog';
import BranchDialog from './components/BranchDialog';
import DepartmentDialog from './components/DepartmentDialog';

export function OrgPage() {
  useInjectReducer({ key: 'orgPage', reducer });
  useInjectSaga({ key: 'orgPage', saga });

  return (
    <div>
      <Helmet>
        <title>OrgPage</title>
        <meta name="description" content="Description of OrgPage" />
      </Helmet>
      <TabsPage />
      <ColorDialog />
      <CompanyDialog />
      <BranchDialog />
      <DepartmentDialog />
    </div>
  );
}

OrgPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orgPage: makeSelectOrgPage(),
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
)(OrgPage);
