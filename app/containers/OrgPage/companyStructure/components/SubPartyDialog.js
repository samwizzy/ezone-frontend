import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

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
  MenuItem,
} from '@material-ui/core';
import * as Selectors from '../../selectors';
import * as Actions from '../../actions';

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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const SubPartyDialog = props => {
  const {
    subPartyDialog,
    closeNewPartyDialogAction,
    closeEditBranchDialogAction,
  } = props;

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [values, setValues] = React.useState({
    branchName: '',
    branchHead: '',
    assistantHead: '',
    email: '',
    numberOfEmployees: '',
    address: '',
  });

  const handleSelectChange = event => {
    setCurrency(event.target.value);
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // useEffect(() => {
  //   setValues({
  //     ...subPartyDialog.data,
  //   });
  // }, []);
  // }, [subPartyDialog.data]);

  const closeComposeDialog = () => {
    // eslint-disable-next-line no-unused-expressions
    subPartyDialog.type === 'new'
      ? closeNewPartyDialogAction()
      : closeEditBranchDialogAction();
  };

  return (
    <div>
      {subPartyDialog && (
        <Dialog
          {...subPartyDialog.props}
          onClose={closeComposeDialog}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <AppBar position="static" elevation={1}>
            <Toolbar>
              <Typography variant="h6">
                {subPartyDialog.type === 'new' ? 'New Party' : 'Edit Party'}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            {subPartyDialog.type === 'new' ? (
              <div>
                <TextField
                  id="standard-title"
                  label="Branch Name"
                  className={classes.textField}
                  value={values.branchName}
                  onChange={handleChange('branchName')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Branch Head"
                  className={classes.textField}
                  value={values.branchHead}
                  onChange={handleChange('branchHead')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Assistant Head"
                  className={classes.textField}
                  value={values.assistantHead}
                  onChange={handleChange('assistantHead')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Email"
                  className={classes.textField}
                  value={values.Email}
                  onChange={handleChange('email')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Number Of Employees"
                  className={classes.textField}
                  value={values.numberOfEmployees}
                  onChange={handleChange('numberOfEmployees')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-select-country"
                  select
                  fullWidth
                  label="Select Country"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-state"
                  select
                  fullWidth
                  label="Select State"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-city"
                  select
                  fullWidth
                  label="Select City"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-address"
                  label="Address"
                  className={classes.textField}
                  value={values.address}
                  onChange={handleChange('address')}
                  margin="normal"
                  fullWidth
                  multiline
                  rows="3"
                />
              </div>
            ) : (
              <div>
                <TextField
                  id="standard-title"
                  label="Branch Name"
                  className={classes.textField}
                  value={values.branchName}
                  onChange={handleChange('branchName')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Branch Head"
                  className={classes.textField}
                  value={values.branchHead}
                  onChange={handleChange('branchHead')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Assistant Head"
                  className={classes.textField}
                  value={values.assistantHead}
                  onChange={handleChange('assistantHead')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Email"
                  className={classes.textField}
                  value={values.Email}
                  onChange={handleChange('email')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-title"
                  label="Number Of Employees"
                  className={classes.textField}
                  value={values.numberOfEmployees}
                  onChange={handleChange('numberOfEmployees')}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-select-country"
                  select
                  fullWidth
                  label="Select Country"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-state"
                  select
                  fullWidth
                  label="Select State"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-city"
                  select
                  fullWidth
                  label="Select City"
                  value={currency}
                  onChange={handleSelectChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-address"
                  label="Address"
                  className={classes.textField}
                  value={values.address}
                  onChange={handleChange('address')}
                  margin="normal"
                  fullWidth
                  multiline
                  rows="3"
                />
              </div>
            )}
          </DialogContent>
          {subPartyDialog.type === 'new' ? (
            <DialogActions>
              <Button
                onClick={() => {
                  // dispatchUpdatePostAction(values);
                  closeComposeDialog();
                }}
                color="primary"
                variant="contained"
              >
                Save
              </Button>
              <Button
                onClick={() => closeComposeDialog()}
                color="primary"
                variant="contained"
              >
                Cancel
              </Button>
            </DialogActions>
          ) : (
            <DialogActions>
              <Button
                onClick={() => {
                  // dispatchUpdatePostAction(values);
                  closeComposeDialog();
                }}
                color="primary"
                variant="contained"
              >
                Update
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

SubPartyDialog.propTypes = {
  // dispatchNewPostAction: PropTypes.func,
  closeNewPartyDialogAction: PropTypes.func,
  closeEditBranchDialogAction: PropTypes.func,
  subPartyDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  subPartyDialog: Selectors.makeSelectSubPartyDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatchNewPostAction: evt => dispatch(Actions.saveNewPost(evt)),
    closeNewPartyDialogAction: () => dispatch(Actions.closeNewPartyDialog()),
    closeEditBranchDialogAction: () =>
      dispatch(Actions.closeEditBranchDialog()),
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
)(SubPartyDialog);
