import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Grid,
  Link,
  Paper,
  makeStyles,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';
import logo from '../../../images/logo.svg';
import banner from '../../../images/banner.svg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://optisoft.ng">
        OptiSoft
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '30px',
    height: '100vh',
  },
  grid: {
    height: '100%',
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.spacing(5),
    overflow: 'hidden',
  },
  image: {
    width: '50%',
    height: '100vh',
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(5),
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    border: '1px solid #F1F5F8',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  input: {
    height: 40,
    margin: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  label: {
    fontSize: 10,
  },
}));

const RegistrationForm = props => {
  const { signupAction } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState({
    companyName: '',
    country: '',
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const canBeSubmitted = () => {
    const { companyName, country, email, password } = values;
    return (
      companyName !== '' && country !== '' && email !== '' && password !== ''
      // companyName !== null && country !== null && email !== null && password !== null
    );
  };

  return (
    <div>
      <div className={classes.image} />

      <div className={classes.root}>
        <Grid container component={Paper} className={classes.grid}>
          <Grid item xs={false} sm={4} md={7} />
          <Grid item xs={12} sm={8} md={5}>
            <div className={classes.paper}>
              <Box className={classes.avatar}>
                <img src={logo} alt="" />
              </Box>
              <Typography component="h6" variant="h6">
                Register
              </Typography>
              <Typography variant="body2">
                <span>Existing User?</span>&nbsp;
                <Link href="/login" variant="body2">
                  Sign In
                </Link>
              </Typography>
              {/* <form className={classes.form} noValidate> */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('companyName')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('password')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="country"
                label="Country"
                id="country"
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('country')}
              />
              <FormControlLabel
                className={classes.label}
                control={<Checkbox value="remember" color="primary" />}
                label={
                  <Typography variant="body2">
                    I agree to the <Link href="#">Terms of Service</Link> and{' '}
                    <Link href="#">Privacy Policy</Link>
                  </Typography>
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!canBeSubmitted()}
                onClick={() => signupAction(values)}
              >
                Sign Up
              </Button>
              <Box mt={2}>
                <Copyright />
              </Box>
              {/* </form> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  signupAction: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    signupAction: evt => dispatch(Actions.signupRequest(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RegistrationForm);
