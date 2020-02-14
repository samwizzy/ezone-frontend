import React, { memo, useEffect } from 'react'; // eslint-disable-next-line no-unused-expressions
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles' 
import {
  Divider,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Slide
} from '@material-ui/core';
import * as Selectors from '../selectors';
import * as Actions from '../actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1.5, 0),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const heads = [
  {
    label: 'Joel Johnson',
    value: 'joel johnson',
  },
  {
    label: 'Fela Brown',
    value: 'fela brown',
  },
  {
    label: 'Charles Brooks',
    value: 'charles brooks',
  },
  {
    label: 'Tom Cruise',
    value: 'tom cruise',
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PartyDialog = props => {
  const { partyDialog, closeNewPartyDialog } = props;

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [values, setValues] = React.useState({
    name: '',
    description: '',
  });

  const handleSelectChange = event => {
    setCurrency(event.target.value);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const closeComposeDialog = () => {
    partyDialog.type === 'new'
      ? closeNewPartyDialog()
      : null;
  };

  return (
    <div>
      <Dialog
        {...partyDialog.props}
        TransitionComponent={Transition}
        onClose={closeNewPartyDialog}
        keepMounted
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {partyDialog.type === 'new' ? 'New Party' : 'Edit Party'}
        </DialogTitle>

        <Divider />

        <DialogContent>
          {partyDialog.type === 'new' ? (
            <div>
              <TextField
                id="party-group"
                label="Party Group"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
              />

              <TextField
                id="description"
                label="Description"
                className={classes.textField}
                value={values.description}
                variant="outlined"
                onChange={handleChange('description')}
                margin="normal"
                fullWidth
                multiline
                rows="3"
              />
              {/* <TextField
                id="select-head"
                select
                fullWidth
                className={classes.textField}
                variant="outlined"
                size="small"
                label="Select Head"
                value={currency}
                onChange={handleSelectChange}
              >
                {heads.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-state"
                select
                fullWidth
                className={classes.textField}
                variant="outlined"
                size="small"
                label="Select Assistant"
                value={currency}
                onChange={handleSelectChange}
              >
                {heads.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}
            </div>
          ) : null }
        </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                closeComposeDialog();
              }}
              color="primary"
              variant="contained"
            >
              {partyDialog.type === 'new' ? 'Save' : 'Update'}
            </Button>
            <Button
              onClick={() => closeNewPartyDialog()}
              color="primary"
              variant="contained"
            >
              Cancel
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

PartyDialog.propTypes = {
  closeNewPartyDialog: PropTypes.func,
  partyDialog: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  partyDialog: Selectors.makeSelectPartyDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeNewPartyDialog: () => dispatch(Actions.closeNewPartyDialog()),
    createNewPartyGroupAction: evt => dispatch(Actions.createNewPartyGroupAction(evt)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PartyDialog);
