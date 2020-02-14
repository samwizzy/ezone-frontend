import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  withStyles,
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
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import * as Selectors from '../selectors';
import * as Actions from '../actions';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

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

const CompanyDialog = props => {
  const {
    companyDialog,
    closeEditCompanyDialog,
    dispatchUpdateCompanyInfoAction,
  } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const [currency, setCurrency] = React.useState('EUR');
  const [values, setValues] = React.useState({
    companyName: '',
    industry: '',
    sector: '',
    noOfEmployees: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    address: '',
    timeZone: '',
    language: '',
    contactPersonName: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    contactPersonTel: '',
    website: '',
  });

  const handleSelectChange = event => {
    setCurrency(event.target.value);
  };
  const handlePanelChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  console.log(companyDialog, 'companyDialog');

  useEffect(() => {
    setValues({
      ...companyDialog.data,
    });
  }, [companyDialog.data]);

  const closeComposeDialog = () => {
    // eslint-disable-next-line no-unused-expressions
    companyDialog.type === 'new' ? '' : closeEditCompanyDialog();
  };

  return (
    <div>
      {companyDialog && (
        <Dialog
          {...companyDialog.props}
          onClose={closeComposeDialog}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <AppBar position="static" elevation={1}>
            <Toolbar>
              <Typography variant="h6">
                {companyDialog.type === 'new' ? '' : 'Edit Company Information'}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            {companyDialog.type === 'new' ? (
              <div />
            ) : (
              <div>
                <ExpansionPanel
                  square
                  expanded={expanded === 'panel1'}
                  onChange={handlePanelChange('panel1')}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>Company Information</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <TextField
                        id="standard-title"
                        label="Company Name"
                        className={classes.textField}
                        value={values.companyName}
                        onChange={handleChange('companyName')}
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="standard-select-sector"
                        select
                        fullWidth
                        label="Select Sector"
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
                        id="standard-select-industry"
                        select
                        fullWidth
                        label="Select Industry"
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
                        id="standard-numberOfEmployees"
                        label="Number Of Employees"
                        className={classes.textField}
                        value={values.noOfEmployees}
                        type="number"
                        onChange={handleChange('noOfEmployees')}
                        margin="normal"
                        fullWidth
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  square
                  expanded={expanded === 'panel2'}
                  onChange={handlePanelChange('panel2')}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>Address</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <TextField
                        id="standard-select-country"
                        select
                        fullWidth
                        label="Select country"
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
                        id="standard-postalCode"
                        label="Postal Code"
                        className={classes.textField}
                        value={values.postalCode}
                        onChange={handleChange('postalCode')}
                        margin="normal"
                        fullWidth
                      />
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
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  square
                  expanded={expanded === 'panel3'}
                  onChange={handlePanelChange('panel3')}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>Region</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      {/* <TextField
                        id="standard-title"
                        label="Company Name"
                        className={classes.textField}
                        value={values.desc}
                        onChange={handleChange('companyName')}
                        margin="normal"
                        fullWidth
                      /> */}
                      <TextField
                        id="standard-select-timeZone"
                        select
                        fullWidth
                        label="Time Zone"
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
                        id="standard-select-language"
                        select
                        fullWidth
                        label="Select Language"
                        value={currency}
                        onChange={handleSelectChange}
                      >
                        {currencies.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  square
                  expanded={expanded === 'panel4'}
                  onChange={handlePanelChange('panel4')}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>Contact Details</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <TextField
                        id="standard-adminName"
                        label="Admin Name"
                        className={classes.textField}
                        value={values.contactPersonName}
                        onChange={handleChange('contactPersonName')}
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="standard-adminEmail"
                        label="Admin Email"
                        className={classes.textField}
                        value={values.contactPersonEmail}
                        onChange={handleChange('contactPersonEmail')}
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="standard-phoneNumber"
                        label="Phone Number"
                        className={classes.textField}
                        value={values.contactPersonPhone}
                        type="number"
                        onChange={handleChange('contactPersonPhone')}
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="standard-telephoneNumber"
                        label="Telephone Number"
                        className={classes.textField}
                        value={values.contactPersonTel}
                        onChange={handleChange('contactPersonTel')}
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="standard-website"
                        label="website"
                        className={classes.textField}
                        value={values.website}
                        onChange={handleChange('website')}
                        margin="normal"
                        fullWidth
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            )}
          </DialogContent>
          {companyDialog.type === 'new' ? (
            <div />
          ) : (
            <DialogActions>
              <Button
                onClick={() => {
                  dispatchUpdateCompanyInfoAction(values);
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

CompanyDialog.propTypes = {
  dispatchNewPostAction: PropTypes.func,
  closeNewPostDialog: PropTypes.func,
  closeEditCompanyDialog: PropTypes.func,
  companyDialog: PropTypes.object,
  dispatchUpdateCompanyInfoAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  companyDialog: Selectors.makeSelectEditCompanyDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatchNewPostAction: evt => dispatch(Actions.saveNewPost(evt)),
    closeEditCompanyDialog: () => dispatch(Actions.closeEditCompanyDialog()),
    dispatchUpdateCompanyInfoAction: evt =>
      dispatch(Actions.updateCompanyInfo(evt)),
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
)(CompanyDialog);
