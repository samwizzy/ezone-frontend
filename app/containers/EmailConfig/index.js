/**
 *
 * EmailConfig
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
import makeSelectEmailConfig from './selectors';
import reducer from './reducer';
import saga from './saga';
import EmailHome from './components/EmailHome';

export function EmailConfig() {
  useInjectReducer({ key: 'emailConfig', reducer });
  useInjectSaga({ key: 'emailConfig', saga });

  return (
    <div>
      <Helmet>
        <title>EmailConfig</title>
        <meta name="description" content="Description of EmailConfig" />
      </Helmet>
      <EmailHome />
    </div>
  );
}

EmailConfig.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailConfig: makeSelectEmailConfig(),
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
)(EmailConfig);
