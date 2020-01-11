import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, List, FormControlLabel, Icon } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from '../../../components/LoadingIndicator';
import AddButton from './AddButton';
import * as Actions from '../actions';
import * as Selectors from '../selectors';

const useStyles = makeStyles(theme => ({}));

const OrgLocation = props => {
  const classes = useStyles();

  const { loading, openEditBranchDialogAction } = props;

  const columns = [
    {
      name: 'Id',
      label: 'S/N',
      options: {
        filter: true,
        customBodyRender: (value, tableMeta) => {
          if (value === '') {
            return '';
          }
          return (
            <FormControlLabel
              label={tableMeta.rowIndex + 1}
              control={<Icon />}
            />
          );
        },
      },
    },
    {
      name: 'title',
      label: 'Branch Name',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'content',
      label: 'Country',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'desc',
      label: 'State',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'id',
      label: 'Address',
      options: {
        filter: true,
        sort: false,
        // customBodyRender: value => {
        //   const Post = getAllPosts.find(post => value === post.id);

        //   if (value === '') {
        //     return '';
        //   }
        //   return (
        //     <FormControlLabel
        //       label="Edit"
        //       control={<Icon>create</Icon>}
        //       onClick={evt => {
        //         evt.stopPropagation();
        //         openEditPostDialog(Post);
        //       }}
        //     />
        //   );
        // },
      },
    },
    {
      name: 'desc',
      label: 'E-mail',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'desc',
      label: 'Users',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'id',
      label: 'Action',
      options: {
        filter: true,
        sort: false,
        // customBodyRender: value => {
        //   const Post = getAllPosts.find(post => value === post.id);

        //   if (value === '') {
        //     return '';
        //   }
        //   return (
        //     <FormControlLabel
        //       label="Delete"
        //       control={<Icon>delete</Icon>}
        //       onClick={evt => {
        //         evt.stopPropagation();
        //         dispatchDeletePostAction(Post);
        //       }}
        //     />
        //   );
        // },
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    customToolbar: () => <AddButton />,
  };

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  return (
    <React.Fragment>
      <MUIDataTable
        title="All Branches"
        data={[]}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
};

OrgLocation.propTypes = {
  loading: PropTypes.bool,
  openEditBranchDialogAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    openEditBranchDialogAction: () => dispatch(Actions.openEditBranchDialog()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(OrgLocation);
