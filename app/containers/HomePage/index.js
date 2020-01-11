/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import {
  Avatar,
  Box,
  Button,
  Container,
  Checkbox,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from '../../images/logo.svg';
import banner from '../../images/banner.svg';

const key = 'home';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ezone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    // height: '100vh',
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.spacing(5),
    overflow: 'hidden',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    marginTop: theme.spacing(1),
  },
  input: {
    height: 40,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1A88E1',
  },
  option: {
    width: '100%',
    color: theme.palette.grey[600],
    lineHeight: '0.1',
    textAlign: 'center',
    margin: '10px 0 20px',
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    '& span': {
      background: '#fff',
      padding: '0 10px',
    },
  },
}));

export function HomePage() {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="ezone application homepage" />
      </Helmet>
      <Container style={{ padding: '50px' }}>
        <Grid container component={Paper} className={classes.root}>
          welcome to homepage
        </Grid>
      </Container>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
