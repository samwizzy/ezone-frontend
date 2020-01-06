import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';

import download6 from '../../../images/download(6).svg';
import user from '../../../images/user.svg';
import msg from '../../../images/msg.svg';
import phone2 from '../../../images/phone2.svg';
import phone from '../../../images/phone.svg';
import web from '../../../images/web.svg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 5, 5, 20),
    marginBottom: theme.spacing(4),
  },
  image: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    left: '150px',
    top: '180px',
    border: '1px solid #C4C4C4',
    borderRadius: '155px',
    padding: '25px',
  },
  edit: {
    position: 'absolute',
    height: '100px',
    left: '1280px',
    top: '180px',
    color: '#1A88E1',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '13px',
    lineHeight: '16px',
    // border: '2px solid #1A88E1',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      height: '100px',
      left: '265px',
      top: '150px',
      color: '#1A88E1',
    },
  },
  orgContainer: {
    padding: theme.spacing(0, 5, 0, 5),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  editButton: {
    width: '117px',
    height: '40px',
    background: '#1A88E1',
    borderRadius: '10px',
    align: 'right',
  },
  listFormat: {
    marginBottom: '10px',
    marginTop: '10px',
  },
}));

const OrgInfo = props => {
  const classes = useStyles();

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <img alt="" src={download6} className={classes.image} />
        <Typography variant="h5" component="h3">
          Octiver Communications
        </Typography>
        <Typography component="p">Telecommunications</Typography>

        <Typography className={classes.edit} onClick={openEditColorDialog}>
          <u>Edit Logo and Color</u>
        </Typography>
      </Paper>

      <div className={classes.orgContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <Typography component="p">Company Information</Typography>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.editButton}
                onClick={openEditCompanyDialog}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={3}>
            <div className={classes.demo}>
              <List>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={user} />
                  </ListItemIcon>
                  <ListItemText primary="Joy Essien" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={msg} />
                  </ListItemIcon>
                  <ListItemText primary="joy.essien@octiver.ng" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={phone2} />
                  </ListItemIcon>
                  <ListItemText primary="+234 097 637 7383" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={phone} />
                  </ListItemIcon>
                  <ListItemText primary="+234 097 637 7383" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={web} />
                  </ListItemIcon>
                  <ListItemText primary="www.octivercommunications .org" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={3}>
            <div className={classes.demo}>
              <List>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={web} />
                  </ListItemIcon>
                  <ListItemText primary="Mandilas House, Marina Lagos Nigeria" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={web} />
                  </ListItemIcon>
                  <ListItemText primary="GMT" />
                </ListItem>
                <ListItem className={classes.listFormat}>
                  <ListItemIcon>
                    <img alt="" src={web} />
                  </ListItemIcon>
                  <ListItemText primary="English" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

OrgInfo.propTypes = {
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
)(OrgInfo);
