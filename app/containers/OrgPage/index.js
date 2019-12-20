/**
 *
 * OrgPage
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
import makeSelectOrgPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TabsPage from './components/TabsPage';
import ListD from './components/ListD';

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
