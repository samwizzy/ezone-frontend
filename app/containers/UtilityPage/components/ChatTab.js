import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  TextField
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';
import ChatIcon from '../../../images/chatIcon.svg';
import ChatBox from './ChatBox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(3),
    borderRadius: '10px',
    backgroundColor: '#F8F8F8'
  },
  button: {
    padding: theme.spacing(1, 4),
    background: theme.palette.primary.main,
    borderRadius: '8px'
  },
  grid: {
    height: '100vh',
    padding: theme.spacing(3),
    border: '1px solid #dcdcdc',
    textAlign: 'center'
  },
  textField: {
    width: theme.spacing(50),
    padding: theme.spacing(0),
    borderRadius: '20px'
  },
  button: {
    margin: theme.spacing(4),
    padding: theme.spacing(1, 10),
    borderRadius: '50px',
  }
}));

const ChatTab = props => {
  const classes = useStyles();
  const [status, setStatus] = React.useState(false);

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
        <div>
        { !status === false?
        <Grid
            justify="center"
            alignItems='center'
            container
            className={classes.grid}
          >
            <Grid item style={{border: '1px solid #dcdcdc', padding: '10px'}}>
              <Box my={2}>
                <img src={ChatIcon} title='ChatIcon' />
              </Box>
              <Typography variant='subtitle1' component='h1'>You currently have no chat</Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start New Chat
              </Button>
            </Grid>
          </Grid>
          :
          <Grid
            justify="center"
            alignItems='center'
            container
          >
            <Grid item xs={4}>
              <Typography variant='subtitle1'>Paragraph</Typography>
            </Grid>
            <Grid item xs={8}>
              
            </Grid>
          </Grid>
          }
        </div>
    </React.Fragment>
  );
};

ChatTab.propTypes = {
  openEditColorDialog: PropTypes.func,
  openEditCompanyDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    openEditCompanyDialog: evt => dispatch(Actions.openEditCompanyDialog(evt)),
    openEditColorDialog: evt => dispatch(Actions.openEditColorDialog(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ChatTab);
