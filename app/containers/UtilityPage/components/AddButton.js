import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Button, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Add } from '@material-ui/icons';
import * as Actions from '../actions';

const useStyles = (theme => ({
  iconButton: {}
}));


export function AddTask(props) {
  const { openNewTaskDialog } = props;
  const classes = useStyles()

  return (
    <React.Fragment>
      <Tooltip title="New Task">
        <Button
          size="small"
          className={classes.iconButton}
          onClick={openNewTaskDialog}
        >
          <Add className={classes.deleteIcon} /> Add Task
        </Button>
      </Tooltip>
    </React.Fragment>
  );
}

export function AddFile(props) {
  const { openFileDialog } = props;
  const classes = useStyles()

  return (
    <React.Fragment>
      <Tooltip title="New File">
        <Button
          size="small"
          className={classes.iconButton}
          onClick={openFileDialog}
        >
          <Add className={classes.deleteIcon} /> Upload File
        </Button>
      </Tooltip>
    </React.Fragment>
  );
}

AddTask.prototypes = {
  classes: PropTypes.object.isRequired,
  openNewBranchDialogAction: PropTypes.func,
};