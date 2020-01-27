import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import * as Selectors from '../../selectors';
import * as Actions from '../../actions';
import { Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SharedFileDialog(props) {
  const { closeSharedFileDialog, data } = props

  console.log(data, 'checking shared...')

  return (
    <div>
      <Dialog
        {...data.props}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeSharedFileDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant='h4'>Hello world</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSharedFileDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeSharedFileDialog} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


SharedFileDialog.propTypes = {
  openSharedFileDialog: PropTypes.func,
  closeSharedFileDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: Selectors.makeSelectSharedFileDialog()
});

function mapDispatchToProps(dispatch) {
  return {
    openSharedFileDialog: ev => dispatch(Actions.openSharedFileDialog(ev)),
    closeSharedFileDialog: () => dispatch(Actions.closeSharedFileDialog()),
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