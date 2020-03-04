import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Slide, Typography, TextField } from '@material-ui/core';
import * as Selectors from '../../selectors';
import * as Actions from '../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0)
    },
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SharedFileDialog(props) {
  const classes = useStyles()
  const { closeShareFileDialog, data } = props
  const [form, setForm] = React.useState({email: '', comment: ''})

  const handleChange = () => {}

  console.log(data, 'checking shared...')

  return (
    <div>
      <Dialog
        {...data.props}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeShareFileDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Share File</DialogTitle>
        <Divider />
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description"></DialogContentText> */}
          <form className={classes.root}>
            <TextField
              label="Enter email address or usernames"
              id="outlined-size-small"
              fullWidth
              variant="outlined"
              size="small"
              value={form.email}
            />

            <TextField
              id="outlined-multiline-static"
              label="Add comment"
              multiline
              fullWidth
              rows="4"
              rowsMax="4"
              value={form.comment}
              onChange={handleChange}
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={closeShareFileDialog} color="primary">
            Cancel
          </Button>
          <Button variant="outlined" onClick={closeShareFileDialog} color="primary">
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


SharedFileDialog.propTypes = {
  openShareFileDialog: PropTypes.func,
  closeShareFileDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: Selectors.makeSelectShareFileDialog()
});

function mapDispatchToProps(dispatch) {
  return {
    openShareFileDialog: ev => dispatch(Actions.openShareFileDialog(ev)),
    closeShareFileDialog: () => dispatch(Actions.closeShareFileDialog()),
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
)(SharedFileDialog);