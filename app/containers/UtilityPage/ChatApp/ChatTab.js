import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar,
  AppBar,
  Box,
  Grid,
  IconButton,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Paper,
  Button,
  TextField
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Add from '@material-ui/icons/Add';
import SettingsVoice from '@material-ui/icons/SettingsVoice';
import Send from '@material-ui/icons/Send';
import VideoCam from '@material-ui/icons/VideoCam';
import Phone from '@material-ui/icons/Phone';
import AttachFile from '@material-ui/icons/AttachFile';
import * as Actions from '../actions';
import ChatIcon from '../../../images/chatIcon.svg';
// import ChatBox from './ChatBox';
import UserChat from './components/UserChat'

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
    backgroundColor: '#F8F8F8',
  },
  button: {
    padding: theme.spacing(1, 4),
    background: theme.palette.primary.main,
    borderRadius: '8px',
  },
  grid: {
    height: '100vh',
    padding: theme.spacing(3),
    border: '1px solid #dcdcdc',
    textAlign: 'center',
  },
  textField: {
    width: theme.spacing(50),
    padding: theme.spacing(0),
    borderRadius: '20px',
  },
  button: {
    margin: theme.spacing(4),
    padding: theme.spacing(1, 10),
    borderRadius: '50px',
  },
  input: {
    height: 40,
  },
  appBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  grow: {
    flexGrow: 1,
  },
  tabs: {
    '& .MuiTab-root': {
      [theme.breakpoints.up('sm')]: {
        minWidth: 'inherit'
      },
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ChatTab = props => {
  const classes = useStyles();
  const [status, setStatus] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, newValue) => {
    setValue(newValue);
  };

  const { openEditColorDialog, openEditCompanyDialog } = props;
  return (
    <React.Fragment>
      <div>
        {!status === false ? (
          <Grid
            justify="center"
            alignItems="center"
            container
            className={classes.grid}
          >
            <Grid item style={{ border: '1px solid #dcdcdc', padding: '10px' }}>
              <Box my={2}>
                <img src={ChatIcon} title="ChatIcon" />
              </Box>
              <Typography variant="subtitle1" component="h1">
                You currently have no chat
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Start New Chat
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid justify="center" container>
            <Grid item xs={12} md={4} style={{ backgroundColor: '#efefef' }}>
              <Paper square>
                <div
                  item
                  xs={12}
                  style={{
                    border: '1px solid #efefef',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="chat"
                    label="Search Chat"
                    placeholder="Is the work done?"
                    multiline
                    name="chat"
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <IconButton>
                    <Add />
                  </IconButton>
                </div>

                <Tabs
                  variant="fullWidth"
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Active" {...a11yProps(1)} />
                  <Tab label="Group" {...a11yProps(1)} />
                  <Tab label="Archive" {...a11yProps(1)} />
                </Tabs>
              </Paper>
              <TabPanel value={value} index={0}>
                <UserChat />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UserChat />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <UserChat />
              </TabPanel>
            </Grid>
            <Grid item xs={12} md={8} component={Paper}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <div className={classes.appBar}>
                    <AppBar position="relative" color="inherit">
                      <Toolbar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                        <Typography variant="h6" className={classes.title}>
                          Christian
                        </Typography>

                        <div>
                          <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                          >
                            <VideoCam />
                          </IconButton>
                          <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                          >
                            <Phone />
                          </IconButton>
                        </div>
                      </Toolbar>
                    </AppBar>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    backgroundColor: '#efefef',
                    padding: '10px', 
                    minHeight: '200px',
                    height: '728px',
                    overflow: 'auto',
                    border: '1px solid #ccc'
                  }}
                >
                  <Paper style={{display: 'inline-block', padding: '8px 20px', borderRadius: '0 8px 8px 8px'}}>Hi brother</Paper>
                </Grid>

                <Grid item xs={12}>
                  <AppBar
                    position="relative"
                    color="inherit"
                    style={{ position: 'bottom: 0' }}
                  >
                    <Toolbar>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <AttachFile />
                      </IconButton>
                      <TextField
                        id="filled-full-width"
                        label="Message"
                        style={{ margin: 8 }}
                        placeholder="Hi, how you doing?"
                        fullWidth
                        size="small"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />

                      <div className={classes.grow} />
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <SettingsVoice />
                      </IconButton>

                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <Send />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
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
