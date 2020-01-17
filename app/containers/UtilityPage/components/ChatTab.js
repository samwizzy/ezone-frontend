import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Box,
  AppBar,
  Grid,
  Icon,
  IconButton,
  Tabs, 
  Tab,
  Typography,
  Paper,
  Button,
  TextField
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Add from '@material-ui/icons/Add'
import * as Actions from '../actions';
import ChatIcon from '../../../images/chatIcon.svg';
// import ChatBox from './ChatBox';

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
  },
  input: {
    height: 40,
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
            <Grid item xs={5}>
              <Paper square>
                <Grid container justify='center' alignItems='center' style={{border: '1px solid'}}>
                  <Grid item xs={9} style={{border: '1px solid green'}}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      // label="Email Address"
                      name="email"
                      InputProps={{
                        className: classes.input,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={3} style={{border: '1px solid red'}}>
                    <IconButton><Add /></IconButton>
                  </Grid>
                </Grid>

                <Tabs
                  variant="fullWidth"
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                >
                  <Tab label="Active" />
                  <Tab label="Disabled" disabled />
                  <Tab label="Active" />
                </Tabs>
              </Paper>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Grid>
            <Grid item xs={7}>
              
            </Grid>
          </Grid>
          }
        </div>
    </React.Fragment>
  );
};

ChatTab.propTypes = {
  openEditColorDialog: PropTypes.func,
  openEditCompanyDialog: PropTypes.func
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
