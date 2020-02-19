import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { IconButton, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Add } from '@material-ui/icons';
import * as Actions from '../../actions';

const defaultToolbarStyles = {
  iconButton: {},
};

// eslint-disable-next-line react/prop-types
export function AddDpt(props) {
  const { classes, openNewDepartmentDialogAction } = props;

  return (
    <React.Fragment>
      <Tooltip title="New Department">
        <IconButton
          className={classes.iconButton}
          onClick={openNewDepartmentDialogAction}
        >
          <Add className={classes.deleteIcon} />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

AddDpt.prototypes = {
  classes: PropTypes.object.isRequired,
  openNewDepartmentDialogAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    openNewDepartmentDialogAction: () =>
      dispatch(Actions.openNewDepartmentDialog()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(defaultToolbarStyles, { name: 'CustomToolbar' }),
  withConnect,
  memo,
)(AddDpt);
