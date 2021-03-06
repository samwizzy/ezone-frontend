/**
 *
 * Config
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Config() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Config.propTypes = {};

export default memo(Config);
