import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar,
  Box,
  Container,
  Card,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
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
    padding: theme.spacing(3),
    border: '1px solid #dcdcdc'
  },
  textField: {
    width: theme.spacing(50),
    padding: theme.spacing(0),
    borderRadius: '20px'
  },
  box: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: '10px',
  }
}));

const TopSection = props => {
  const classes = useStyles();

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
        <Container>
          <Grid container className={classes.grid}>
            <Grid item sm={12} xs={12}>
              <TextField
                className={classes.textField}
                id="outlined-search" 
                label="Search Apps"
                type="search" 
                variant="outlined" 
                size="small"
              />
            </Grid>
          </Grid>


          <Grid
            justify="space-between"
            container
            className={classes.grid}
          >

            <Grid item xs={12} sm={8} spacing={3} style={{border: '1px dotted #f8f8f8'}}>
              <Grid container justify="space-between" className={classes.grid}>
                <Grid item sm={6}>
                  <Typography variant="h6" component="h3">My Apps</Typography>
                </Grid>
                <Grid item sm={6} justify="flex-end" style={{textAlign: 'right'}}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Request App Access
                  </Button>
                </Grid>
              </Grid>  
              <Grid container justify="space-between">
                <Grid item sm={12} xs={12}>
                  <Paper className={classes.paper} elevation={2}>
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} spacing={3}>
              {/* Calendar goes here */}
            </Grid>


          </Grid>
        </Container>
    </React.Fragment>
  );
};

TopSection.propTypes = {
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
)(TopSection);
