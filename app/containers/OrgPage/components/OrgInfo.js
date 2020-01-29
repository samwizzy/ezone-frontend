import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar,
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
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';
import classNames from 'classnames';
import EditOutlined from '@material-ui/icons/EditOutlined'
import download6 from '../../../images/download(6).svg';
import user from '../../../images/user.svg';
import msg from '../../../images/msg.svg';
import phone2 from '../../../images/phone2.svg';
import phone from '../../../images/phone.svg';
import web from '../../../images/web.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.common.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    backgroundImage: 'linear-gradient(111.61deg, #1A88E1 38.84%, #3F0A96 101.73%)'
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(4, 8),
    margin: theme.spacing(2),
  },
  button: {
    padding: theme.spacing(1, 4),
    marginLeft: theme.spacing(1),
    borderRadius: '20px',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(1),
    },
  },
  editButton: {
    color: theme.palette.primary.main
  },
  inline: {
    color: theme.palette.common.white
  }
}));

const OrgInfo = props => {
  const classes = useStyles();
  const { history } = props

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Grid justify="space-between" container>
          <Grid item xs={6}>
            <List className={classes.list}>
              <ListItem
                alignItems="flex-start"
                style={{ display: 'flex', alignItems: 'center'}}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Company Logo"
                    src={download6}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6" color='default'>Octiver Communications</Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Telecommunications
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Grid container alignContent='space-between' style={{height: '100%', textAlign: 'right'}}>
              <Grid item xs={12}>
                <Link href="#" variant="body2" color='inherit'>
                  Edit Logo and Color <EditOutlined />
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={openEditCompanyDialog}
                >
                  Edit Profile
                </Button>

                <Button
                  variant="contained"
                  color="inherit"
                  className={classNames(classes.button, classes.editButton)}
                  onClick={() => history.push('/organization/company/structure')}
                >
                  Company Structure
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <Typography variant="h6">Company Information</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <Typography variant="h6">Contact Person</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Paper>
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

export default withRouter(compose(
  withConnect,
  memo,
)(OrgInfo));
