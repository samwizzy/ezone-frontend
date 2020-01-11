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

const DepartmentDialog = props => {
  const {
    departmentDialog,
    closeNewDepartmentDialogAction,
    closeEditDepartmentDialogAction,
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
  //     ...departmentDialog.data,
  //   });
  // }, []);
  // }, [departmentDialog.data]);

  const closeComposeDialog = () => {
    // eslint-disable-next-line no-unused-expressions
    departmentDialog.type === 'new'
      ? closeNewDepartmentDialogAction()
      : closeEditDepartmentDialogAction();
  };

  return (
    <div>
      {departmentDialog && (
        <Dialog
          {...departmentDialog.props}
          onClose={closeComposeDialog}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <AppBar position="static" elevation={1}>
            <Toolbar>
              <Typography variant="h6">
                {departmentDialog.type === 'new'
                  ? 'New Department'
                  : 'Edit Department'}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            {departmentDialog.type === 'new' ? (
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
          {departmentDialog.type === 'new' ? (
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

DepartmentDialog.propTypes = {
  dispatchNewPostAction: PropTypes.func,
  closeNewDepartmentDialogAction: PropTypes.func,
  closeEditDepartmentDialogAction: PropTypes.func,
  departmentDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  departmentDialog: Selectors.makeSelectDepartmentDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatchNewPostAction: evt => dispatch(Actions.saveNewPost(evt)),
    closeNewDepartmentDialogAction: () =>
      dispatch(Actions.closeNewDepartmentDialog()),
    closeEditDepartmentDialogAction: () =>
      dispatch(Actions.closeEditDepartmentDialog()),
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
)(DepartmentDialog);
