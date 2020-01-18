import React, { useState, useRef, memo } from 'react';
// import 'jodit';
// import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserMenu from '../../../components/layouts/shared-components/UserMenu';
import * as Actions from '../actions';

const useStyles = makeStyles(theme => ({
  contain: {
    margin: theme.spacing(0, 1, 0, 0),
  },
  card: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
    borderRadius: '20px',
  },
  resetButton: {
    // float: 'right',
    background: '#F3F3F3',
    border: '1px solid #CCCCCC',
    boxSizing: 'border-box',
    borderRadius: '10px',
    margin: theme.spacing(2),
  },
}));

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  minHeight: 500,
};

const EmailTemplate = props => {
  const classes = useStyles();

  const editor = useRef(null);
  const [content, setContent] = useState('');

  const {} = props;
  return (
    <React.Fragment>
      <UserMenu />
      <Grid container spacing={3} className={classes.contain}>
        <Grid item xs={12} md={3} lg={3}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <ListItem alignItems="flex-start">
                <ListItemText secondary="Email Templates" />
              </ListItem>
              <Divider component="hr" />
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Choose Template" />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText secondary="Password reset" />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText secondary="New user welcome message" />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText secondary="Signature Approval" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={9} lg={9}>
          <ListItem alignItems="flex-start">
            <ListItemText secondary="Password reset Template" />
          </ListItem>
          <Button variant="contained" className={classes.resetButton}>
            Reset Default Template
          </Button>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={newContent => setContent(newContent)}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

EmailTemplate.propTypes = {
  // openEditColorDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    // openEditColorDialog: evt => dispatch(Actions.openEditColorDialog(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EmailTemplate);
