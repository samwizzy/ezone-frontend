/**
 *
 * CompanyStructurePage
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
import PartyDialog from './components/PartyDialog';
import SubPartyDialog from './components/SubPartyDialog';

export function CompanyStructurePage() {
  useInjectReducer({ key: 'companyStructurePage', reducer });
  useInjectSaga({ key: 'companyStructurePage', saga });

  return (
    <div>
      <Helmet>
        <title>Company Structure Page</title>
        <meta name="description" content="Description of CompanyStructurePage" />
      </Helmet>
      <TabsPage />

      <PartyDialog />
      <SubPartyDialog />
    </div>
  );
}

CompanyStructurePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  companyStructurePage: makeSelectOrgPage(),
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
)(CompanyStructurePage);
