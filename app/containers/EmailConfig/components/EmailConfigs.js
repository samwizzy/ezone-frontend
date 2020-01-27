import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Divider,
  Button,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';

const useStyles = makeStyles(theme => ({
  card: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
    borderRadius: '20px',
    margin: theme.spacing(1, 2, 1, 4),
  },
  formStyle: {
    padding: theme.spacing(2),
  },
  header: {
    margin: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.5)',
  },
  buttonStyle: {
    margin: theme.spacing(2),
  },
}));

const EmailConfigs = props => {
  const classes = useStyles();

  const {} = props;
  return (
    <React.Fragment>
      Email Configuration Settings
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={3} className={classes.formStyle}>
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <TextField
                  id="outlined-Description"
                  label="Description"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <TextField
                  id="outlined-serverName"
                  label="Server Name"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <div>
                <TextField
                  id="outlined-Port"
                  label="Port"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.header}
              >
                Default ***
              </Typography>
            </Grid>
          </Grid>
          <Divider component="hr" />

          <Typography variant="h6" component="h6" className={classes.header}>
            Security and Authentication
          </Typography>
          <Grid container spacing={3} className={classes.formStyle}>
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <TextField
                  id="outlined-Connection-Security"
                  label="Connection Security"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <TextField
                  id="outlined-Authentication-Method"
                  label="Authentication Method"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <TextField
                  id="outlined-Username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button variant="contained" color="primary" className={classes.buttonStyle}>
              Save
            </Button>
            <Button variant="contained" color="primary" className={classes.buttonStyle}>
              Cancel
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

EmailConfigs.propTypes = {
  // openEditColorDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    // openEditColorDialog: evt => dispatch(Actions.openEditColorDialog(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EmailConfigs);
