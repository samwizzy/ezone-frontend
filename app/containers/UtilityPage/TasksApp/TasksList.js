import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Grid, Menu, MenuItem, List, ListItem, ListItemText, FormControlLabel, Icon, IconButton, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from '../../../components/LoadingIndicator';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import tasksIcon from '../../../images/tasksIcon.svg'
import {AddTask} from './../components/AddButton';
import * as Actions from '../actions';
import * as Selectors from '../selectors';

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  button: {
    borderRadius: '20px',
    margin: theme.spacing(5, 0),
    padding: theme.spacing(1, 15),
  }

}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const NoTaskList = props => {
  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center' className={classes.root}>
      <Grid item>
        <Box my={4}>
          <img src={tasksIcon} />
        </Box>
        <Box>
          <Typography variant='h6'>No file yet</Typography>

          <Button variant="contained" color="primary" className={classes.button} disableElevation>
            Upload a file
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}


const TasksList = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loading, data, opeEditDepartmentDialogAction } = props;

  const columns = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
      },
    },
    {
      name: 'format',
      label: 'Format',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'size',
      label: 'Size',
      options: {
        filter: true,
        sort: false
      },
    },
    {
      name: 'owner',
      label: 'Owner',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'modified_by',
      label: 'Modified By',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'date_uploaded',
      label: 'Date Uploaded',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'id',
      label: ' ',
      options: {
        filter: true,
        sort: false,
        customBodyRender: id => {
          const options = ['View', 'Signature', 'Download', 'Shared', 'Add Task', 'Delete']
          return (
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertRounded />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >
                {options.map(option => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )
        }
      },
    }
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    customToolbar: () => <AddTask />,
  };

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if(!data){
    return <NoTaskList />
  }

  return (
    <React.Fragment>
      <Grid container justify='center'>
        <Grid item xs={2} md={2}>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Favorite" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Shared" />
            </ListItemLink>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10} md={10}>
          <MUIDataTable
            title="Task List"
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

TasksList.propTypes = {
  loading: PropTypes.bool,
  opeEditDepartmentDialogAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
  data: Selectors.makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    opeEditDepartmentDialogAction: () => dispatch(Actions.opeEditDepartmentDialog()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TasksList);
