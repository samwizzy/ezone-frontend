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
    // padding: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    padding: theme.spacing(1, 4),
    background: theme.palette.primary.main,
    borderRadius: '8px'
  },
  textField: {
    padding: theme.spacing(0),
    borderRadius: '20px'
  },
  box: {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  }
}));

const TopSection = props => {
  const classes = useStyles();

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
        <Container className={classes.root}>


          <Grid
            justify="space-between"
            container
            spacing={3}
          >

            <Grid item sm={12} xs={12} spacing={10} style={{border: '1px solid'}}>
              <TextField
                className={classes.textField}
                id="outlined-search" 
                label="Search"
                type="search" 
                variant="outlined" 
                size="small"
              />
            </Grid>



            <Grid item xs={12} sm={8} spacing={3} style={{border: '1px solid'}}>
              <Grid container justify="space-between">
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

                <Grid item sm={12} xs={12} spacing={10}>
                  <div className={classes.root}>
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                    <Paper className={classes.box} />
                  </div>
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
