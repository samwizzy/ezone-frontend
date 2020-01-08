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
    display: 'flex',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  paper: {
    padding: theme.spacing(2),
  },
  editButton: {
    padding: theme.spacing(1, 4),
    background: theme.palette.primary.main,
    borderRadius: '8px'
  }
}));

const OrgInfo = props => {
  const classes = useStyles();

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Grid
          justify="space-between"
          container
        >
          <Grid item>
            <List className={classes.list}>
              <ListItem alignItems="flex-start" style={{display: 'flex', alignItems: 'center'}}>
                <ListItemAvatar>
                  <Avatar alt="Company Logo" src={download6} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant='h6'>Octiver Communications</Typography>}
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
          <Grid item>
            <List component='nav' className={classes.list}>
              <ListItem onClick={openEditColorDialog} alignItems="flex-start">
                <ListItemText
                  primary={
                    <Link href="#" variant="body2">
                      Edit Logo and Color
                    </Link>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper} variant='outlined'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6}>
            <Typography variant='h6'>Company Information</Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
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
          <Grid item xs={12} md={6} sm={3}>
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

export default compose(
  withConnect,
  memo,
)(OrgInfo);
