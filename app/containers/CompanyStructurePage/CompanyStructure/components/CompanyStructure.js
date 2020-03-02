/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Breadcrumbs,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Grid,
  Paper,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Link,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Add from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import * as Actions from '../../actions';
import * as Selectors from '../../selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& :hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  breadcrumbs: {
    padding: theme.spacing(2, 0),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  partyButton: {
    float: 'right',
    marginLeft: '10px',
  },
  table: {
    minWidth: 650,
    '& td, th': {
      border: 0,
      '& button': {
        textAlign: 'left',
        width: theme.spacing(30),
      },
      '& div': {
        width: theme.spacing(30),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '20px',
        padding: theme.spacing(1, 2),
      },
    },
  },
  header: {
    padding: theme.spacing(1.5, 0),
  },
}));

const NoPartyGroup = props => {
  const classes = useStyles();
  const { dispatchOpenNewPartyGroupAction } = props;

  return (
    <React.Fragment>
      <Grid container justify="space-between" className={classes.header}>
        <Grid item />
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.partyButton}
            onClick={() => dispatchOpenNewPartyGroupAction()}
          >
            <Add /> Create Party Group
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

NoPartyGroup.propTypes = {
  dispatchOpenNewPartyGroupAction: PropTypes.func,
};

const CompanyStructure = props => {
  const {
    dispatchGetAllUsersAction,
    selectedPartyGroupData,
    DispatchgetSelectedPartyGroupAction,
    partyGroupData,
    dispatchOpenNewPartyGroupAction,
    dispatchOpenNewPartyAction,
    loading,
  } = props;

  useEffect(() => {
    dispatchGetAllUsersAction();
  }, []);
  const classes = useStyles();

  console.log(partyGroupData, 'partyGroupData');

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!partyGroupData.length) {
    return (
      <NoPartyGroup
        dispatchOpenNewPartyGroupAction={dispatchOpenNewPartyGroupAction}
      />
    );
  }

  console.log(selectedPartyGroupData, 'selectedPartyGroupData');
  return (
    <React.Fragment>
      <div>
        <Grid container justify="space-between" className={classes.header}>
          <Grid item>
            <Typography variant="h6">Company Information.</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.partyButton}
              onClick={() => dispatchOpenNewPartyGroupAction()}
            >
              <Add /> Add Party Group
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2} md={2}>
            <Paper className={classes.paper}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.list}
              >
                {partyGroupData.map(data => (
                  <ListItem
                    button
                    key={data.id}
                    // selected={selectedIndex === 0}
                    onClick={() => DispatchgetSelectedPartyGroupAction(data)}
                  >
                    <ListItemText primary={data.name} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={10} md={10}>
            <Paper className={classes.paper}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {/* Region */}
                    <Typography variant="h6">
                      {selectedPartyGroupData.name}
                    </Typography>
                  </ListSubheader>
                }
                className={classes.root}
              >
                <Divider />
                <ListItem>
                  <Typography variant="h6">Information.</Typography>
                </ListItem>
                <ListItem>
                  <Table
                    className={classes.table}
                    aria-label="simple table"
                    size="small"
                  >
                    <TableBody>
                      {/* {rows.map(row => ( */}
                      <TableRow key={selectedPartyGroupData.id}>
                        <TableCell component="th" scope="row" width="25%">
                          {/* {row.title} */}
                        </TableCell>
                        <TableCell align="left" width="75%">
                          {selectedPartyGroupData.description}
                        </TableCell>
                      </TableRow>
                      {/* ))} */}
                    </TableBody>
                  </Table>
                </ListItem>
              </List>

              <Divider />
              <Grid item>
                {selectedPartyGroupData && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.partyButton}
                    onClick={() => dispatchOpenNewPartyAction()}
                  >
                    <Add /> Add New Party
                  </Button>
                )}
              </Grid>
              <Table
                className={classes.table}
                aria-label="simple table"
                size="small"
              >
                <TableBody>
                  {selectedPartyGroupData &&
                    selectedPartyGroupData.parties.map(party => (
                      <TableRow key={party.id}>
                        <TableCell
                          component="th"
                          scope="row"
                          width="25%"
                          // onClick={() =>
                          //   DispatchgetSelectedPartyGroupAction(party)
                          // }
                        >
                          <Link
                            href={`/organization/company/structure/party/${
                              selectedPartyGroupData.id
                            }/${party.id}`}
                          >
                            {party.name}
                            {/* <div>{party.name}</div> */}
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

CompanyStructure.propTypes = {
  // dispatchGetPartyGroups: PropTypes.func,
  dispatchGetAllUsersAction: PropTypes.func,
  loading: PropTypes.bool,
  dispatchOpenNewPartyGroupAction: PropTypes.func,
  dispatchOpenNewPartyAction: PropTypes.func,
  partyGroupData: PropTypes.oneOfType(PropTypes.array),
  DispatchgetSelectedPartyGroupAction: PropTypes.func,
  selectedPartyGroupData: PropTypes.oneOfType(PropTypes.object, PropTypes.bool),
};

const mapStateToProps = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
  partyGroupData: Selectors.makeSelectPartyGroupData(),
  selectedPartyGroupData: Selectors.makeSelectSelectedPartyGroupData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchOpenNewPartyGroupAction: () =>
      dispatch(Actions.openNewPartyGroupDialog()),
    dispatchOpenNewPartyAction: () => dispatch(Actions.openNewPartyDialog()),
    openNewRoleDialog: () => dispatch(Actions.openNewRoleDialog()),
    DispatchgetSelectedPartyGroupAction: evt =>
      dispatch(Actions.getSelectedPartyGroupAction(evt)),

    // dispatchGetPartyGroups: () => dispatch(Actions.getPartyGroupAction()),
    dispatchGetAllUsersAction: () => dispatch(Actions.getAllUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CompanyStructure);
