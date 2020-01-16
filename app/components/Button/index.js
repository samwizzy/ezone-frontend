/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

function CustomButton(props) {
    const classes = useStyles();

    const button = (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        {Children.toArray(props.children)}
      </Button>
    );

    return <React.Fragment>{button}</React.Fragment>;
}

CustomButton.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
