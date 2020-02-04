import React, { memo, useEffect } from 'react'; // eslint-disable-next-line no-unused-expressions
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  TextField,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PartyDialog = props => {
  const { partyDialog, closeNewPartyDialog, closeEditBranchDialog } = props;

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [values, setValues] = React.useState({
    branchName: '',
    branchHead: '',
    assistantHead: '',
    email: '',
    numberOfEmployees: '',
    address: ''
  });

  console.log(partyDialog, "Pary dialog...")

  const handleSelectChange = event => {
    setCurrency(event.target.value);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const closeComposeDialog = () => {
    partyDialog.type === 'new'
      ? closeNewPartyDialog()
      : closeEditBranchDialog();
  };

  return (
    <div>
      {partyDialog && (
        <Dialog
          {...partyDialog.props}
          TransitionComponent={Transition}
          onClose={closeNewPartyDialog}
          keepMounted
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {partyDialog.type === 'new' ? 'New Party' : 'Edit Party'}
          </DialogTitle>

          <DialogContent>
            {partyDialog.type === 'new' ? (
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
          {partyDialog.type === 'new' ? (
            <DialogActions>
              <Button
                onClick={() => {
                  closeComposeDialog();
                }}
                color="primary"
                variant="contained"
              >
                Save
              </Button>
              <Button
                onClick={() => closeNewPartyDialog()}
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
                  closeComposeDialog();
                }}
                color="primary"
                variant="contained"
              >
                Update
              </Button>
              <Button
                onClick={() => closeNewPartyDialog()}
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

PartyDialog.propTypes = {
  closeNewPartyDialog: PropTypes.func,
  closeEditBranchDialog: PropTypes.func,
  partyDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  partyDialog: Selectors.makeSelectPartyDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeNewPartyDialog: () => dispatch(Actions.closeNewPartyDialog()),
    closeEditBranchDialog: () => dispatch(Actions.closeEditBranchDialog())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PartyDialog);
