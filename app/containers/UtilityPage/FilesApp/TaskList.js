import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, GridList, GridListTile, GridListTileBar, Divider, Menu, MenuItem, List, ListItem, ListSubheader, ListItemText, ListItemIcon, FormControlLabel, Icon, IconButton, Typography, Toolbar, Hidden, Drawer } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';
import * as Selectors from '../selectors';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = '100%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.common.white
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      overflowY: 'auto',
      height: '500px'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const tileData = [
    {
      img: 'https://via.placeholder.com/150',
      title: 'Task One',
      author: 'author',
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Image',
      author: 'author',
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Task Two',
      author: 'author',
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Task Three',
      author: 'author',
    },
];

const TaskList = props => {
  const classes = useStyles();
  const { loading, openNewTaskDialog, getUtilityTasks, tasks, task, users, container } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  console.log(tasks, "tasks from tasklist single")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTaskClick = (id) => {
    console.log(id, "id")
  }

  React.useEffect(() => {
    getUtilityTasks()
  }, []);

  const drawer = (
    <div className={classes.drawer}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography variant="subtitle1">Tasks</Typography>
          </ListSubheader>
        }
      >
        {tasks && tasks.map((task, index) => (
          <ListItem button key={task.id} onClick={() => handleTaskClick(task.id)}>
            <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='space-around'
      >
        <Grid item md={2}>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              
            </Hidden>
            <Hidden xsDown implementation="css">
              <div
                className={classes.drawerPaper}
              >
                {drawer}
              </div>
            </Hidden>
          </nav>
        </Grid>
        <Grid item md={7}>
          <Typography variant="subtitle2">Task Details</Typography>
          {task && task.description}
        </Grid>
        <Grid item md={3}>
          <Typography variant="subtitle2">Task Preview</Typography>
          <div className={classes.gridRoot}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">December</ListSubheader>
              </GridListTile>
              {tileData.map(tile => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

TaskList.propTypes = {
  loading: PropTypes.bool,
  openNewTaskDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
  tasks: Selectors.makeSelectTasks(),
  task : Selectors.makeSelectTask(),
  users: Selectors.makeSelectEmployees(),
});

function mapDispatchToProps(dispatch) {
  return {
    openNewTaskDialog: () => dispatch(Actions.openNewTaskDialog()),
    getUtilityTasks: () => dispatch(Actions.getUtilityTasks()),
    getEmployees: () => dispatch(Actions.getEmployees()),
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
)(TaskList));
