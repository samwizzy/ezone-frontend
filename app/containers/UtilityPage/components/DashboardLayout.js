import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  IconButton,
  Typography,
  Box, 
  Link,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Toolbar
} from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import classNames from 'classnames';
import { createStructuredSelector } from 'reselect';
import { fade } from '@material-ui/core/styles/colorManipulator';
import * as Actions from '../actions';
import * as EmployeeActions from '../../UsersPage/actions';
import HomeTab from './HomeTab';
import ChatTab from '../ChatApp/ChatTab';
import TasksList from '../TasksApp/TasksList';
import TaskList from '../TasksApp/TaskList';
import FilesList from '../FilesApp/FilesList';
import Autorenew from '@material-ui/icons/Autorenew'
import UserMenu from '../../../components/layouts/shared-components/UserMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: '10px 25px',
    borderRadius: '20px 20px 0 0',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',
    },
    '& > div:first-child': {
      display: 'flex',
      justifyContent: 'space-between',
      '& button': {
        color: theme.palette.common.white,
        marginLeft: '50px',
        textDecoration: 'none',
        '& :hover, :active': {
          color: fade(theme.palette.common.white, 0.5)
        }
      }
    },
  },
  navList: {
    '&.me': { backgroundColor: 'red', color: 'red'}
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsPage(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
<<<<<<< HEAD:app/containers/UtilityPage/components/DashboardLayout.js
  const { match, history, location } = props
  const { pathname } = location
  console.log(pathname, "props.pathname")
=======

  const { dispatchGetAllEmployees } = props;

  useEffect(() => {
    dispatchGetAllEmployees();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
>>>>>>> c8a8caa2b667ed42db4ca7311c7bd2f384b90daa:app/containers/UtilityPage/components/TabsPage.js

  return (
    <div className={classes.root}>
      <AppBar position="relative" color='secondary'>
        <Toolbar variant="dense" className={classes.toolbar}>

          <div>
            <IconButton aria-label="delete">
              <Autorenew />
            </IconButton>

            <Button
              className={classNames(
                {'active': pathname == '/dashboard/projects/'}
              )}
              component="button"
              onClick={() => {
                history.push('/dashboard')
              }}
            >
              Project
            </Button>
            <Button
              component="button"
              onClick={() => {
                history.push('/dashboard/chats')
              }}
            >
              Chats
            </Button>
            <Button
              className={classNames(classes.navList, {'me': true})}
              component="button"
              onClick={() => {
                history.push('/dashboard/tasks')
              }}
            >
              Tasks
            </Button>
            <Button
              component="button"
              onClick={() => {
                history.push('/dashboard/files')
              }}
            >
              Files
            </Button>
          </div>

          <UserMenu />
        </Toolbar>
      </AppBar>
      <main>
        {props.children}
      </main>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  dispatchGetAllEmployees: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUtilityTasks: evt => dispatch(Actions.getUtilityTasks(evt)),
    dispatchGetAllEmployees: () => dispatch(EmployeeActions.getAllEmployees()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(TabsPage));

