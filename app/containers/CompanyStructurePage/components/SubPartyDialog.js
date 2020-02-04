import React, { memo, useEffect } from 'react';  // eslint-disable-next-line no-unused-expressions
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Divider,
  TextField,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  MenuItem,
  Slide
} from '@material-ui/core';
import * as Selectors from '../selectors';
import * as Actions from '../actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1.5, 0),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const heads = [
  {
    label: 'Joel Johnson',
    value: 'joel johnson',
  },
  {
    label: 'Fela Brown',
    value: 'fela brown',
  },
  {
    label: 'Charles Brooks',
    value: 'charles brooks',
  },
  {
    label: 'Tom Cruise',
    value: 'tom cruise',
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubPartyDialog = props => {
  const { subPartyDialog, closeNewSubGroupDialog, closeEditBranchDialogAction } = props;

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [values, setValues] = React.useState({
    group: '',
    subgroup: '',
    description: '',
    head: '',
    assistant: ''
  });

  console.log(subPartyDialog, "subPartyDialog props ...")

  const handleSelectChange = event => {
    setCurrency(event.target.value);
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const closeComposeDialog = () => {
    subPartyDialog.type === 'new'
      ? closeNewSubGroupDialog()
      : null
  };

  return (
    <div>
      <Dialog
        {...subPartyDialog.props}
        onClose={closeNewSubGroupDialog}
        keepMounted
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {subPartyDialog.type === 'new' ? 'New Sub-Group' : 'Edit Sub-Group'}
        </DialogTitle>

        <Divider />

        <DialogContent>
          {subPartyDialog.type === 'new' ? (
            <div>
              <TextField
                id="select-group"
                select
                fullWidth
                className={classes.textField}
                variant="outlined"
                label="Select Group"
                value={currency}
                onChange={handleSelectChange}
              >
                {heads.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="subgroup-name"
                label="SubGroup Name"
                className={classes.textField}
                value={values.subgroup}
                variant="outlined"
                onChange={handleChange('subgroup')}
                margin="normal"
                fullWidth
              />
              <TextField
                id="description"
                label="Description"
                className={classes.textField}
                value={values.description}
                onChange={handleChange('description')}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rows="3"
              />
              
              <TextField
                id="select-head"
                select
                fullWidth
                variant="outlined"
                label="Select Head"
                className={classes.textField}
                value={currency}
                onChange={handleSelectChange}
              >
                {heads.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="select-assistant"
                select
                fullWidth
                variant="outlined"
                className={classes.textField}
                label="Select Assistant"
                value={currency}
                onChange={handleSelectChange}
              >
                {heads.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              
            </div>
          ) : null}
        </DialogContent>
        
        <DialogActions>
          <Button
            onClick={() => {
              // dispatchUpdatePostAction(values);
              closeComposeDialog();
            }}
            color="primary"
            variant="contained"
          >
            {subPartyDialog.type === 'new' ? 'Save' : 'Update'}
          </Button>
          <Button
            onClick={() => closeNewSubGroupDialog()}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SubPartyDialog.propTypes = {
  // dispatchNewPostAction: PropTypes.func,
  closeNewSubGroupDialog: PropTypes.func,
  subPartyDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  subPartyDialog: Selectors.makeSelectSubPartyDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeNewSubGroupDialog: () => dispatch(Actions.closeNewSubGroupDialog()),
    // dispatchUpdatePostAction: evt => dispatch(Actions.updatePost(evt)),
    // dispatchNewPostAction: evt => dispatch(Actions.saveNewPost(evt)),
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
)(SubPartyDialog);
