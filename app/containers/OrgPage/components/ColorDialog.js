/**
 *
 * AllPosts
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import ColorPicker from 'material-ui-color-picker';

import {
  TextField,
  makeStyles,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import * as Selectors from '../selectors';
import * as Actions from '../actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const ColorDialog = props => {
  const {
    colorDialog,
    closeEditColorDialog,
    // dispatchNewPostAction,
    // dispatchUpdatePostAction,
  } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState({
    title: '',
    // desc: '',
    content: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  console.log(colorDialog, 'colorDialog');

  // useEffect(() => {
  //   setValues({
  //     ...colorDialog.data,
  //   });
  // }, []);
  // }, [colorDialog.data]);

  const closeComposeDialog = () => {
    // eslint-disable-next-line no-unused-expressions
    colorDialog.type === 'new' ? '' : closeEditColorDialog();
  };

  return (
    <div>
      {colorDialog && (
        <Dialog
          {...colorDialog.props}
          onClose={closeComposeDialog}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <AppBar position="static" elevation={1}>
            <Toolbar>
              <Typography variant="h6">
                {colorDialog.type === 'new' ? '' : 'Edit Logo And Color'}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            {colorDialog.type === 'new' ? (
              <div />
            ) : (
              <div>
                <TextField
                  id="standard-title"
                  label="Description"
                  className={classes.textField}
                  value={values.desc}
                  onChange={handleChange('desc')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-description"
                  label="Content"
                  className={classes.textField}
                  value={values.content}
                  onChange={handleChange('content')}
                  margin="normal"
                  fullWidth
                  multiline
                  rows="4"
                />
              </div>
            )}
          </DialogContent>
          {colorDialog.type === 'new' ? (
            <div />
          ) : (
            <DialogActions>
              <Button
                onClick={() => {
                  dispatchUpdatePostAction(values);
                  closeComposeDialog();
                }}
                color="primary"
                variant="contained"
              >
                Upload
              </Button>
              <Button
                onClick={() => closeComposeDialog()}
                color="primary"
                variant="contained"
              >
                Cancel
              </Button>
            </DialogActions>
          )}
        </Dialog>
      )}
    </div>
  );
};

ColorDialog.propTypes = {
  dispatchNewPostAction: PropTypes.func,
  closeNewPostDialog: PropTypes.func,
  closeEditColorDialog: PropTypes.func,
  colorDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  colorDialog: Selectors.makeSelectEditColorDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatchNewPostAction: evt => dispatch(Actions.saveNewPost(evt)),
    openEditColorDialog: evt => dispatch(Actions.openEditColorDialog(evt)),
    closeEditColorDialog: () => dispatch(Actions.closeEditColorDialog()),
    // dispatchUpdatePostAction: evt => dispatch(Actions.updatePost(evt)),
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
)(ColorDialog);
