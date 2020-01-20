/**
 *
 * RegistrationPage
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
import makeSelectRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import RegistrationForm from './components/RegistrationForm';

export function RegistrationPage() {
  useInjectReducer({ key: 'registrationPage', reducer });
  useInjectSaga({ key: 'registrationPage', saga });

  return (
    <div>
      <Helmet>
        <title>RegistrationPage</title>
        <meta name="description" content="Description of RegistrationPage" />
      </Helmet>
      <RegistrationForm />
    </div>
  );
}

RegistrationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registrationPage: makeSelectRegistrationPage(),
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
)(RegistrationPage);
