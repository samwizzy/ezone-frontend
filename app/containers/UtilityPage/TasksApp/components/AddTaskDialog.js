import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import _ from 'lodash';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, MenuItem, Slide, Typography, TextField } from '@material-ui/core';
import * as Selectors from '../../selectors';
import * as Actions from '../../actions';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0)
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddTaskDialog(props) {
  const classes = useStyles();
  const { openTaskPreviewDialog, closeNewTaskDialog, createUtilityTask, data, users } = props;
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    startDate: moment(new Date()).format('YYYY-MM-DD'),
    endDate: moment(new Date()).format('YYYY-MM-DD'),
    status: "PENDING",
    assignedTo: "",
    attachments: []
  });

  React.useEffect(() => {
  }, [])

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, "name")
    console.log(value, "value")
    setForm({...form, [name]: value});
    // setForm(_.set({...form}, event.target.name, event.target.value))
  }

  const reformattedDate = (date) => {
    var month = date.getMonth() + 1; //months from 1-12
    var day = date.getDate();
    var year = date.getFullYear();
    
    var day = day.length > 0? day : day.toString().padStart(2, '0')
    var month = month.length > 0? month : month.toString().padStart(2, '0')
    
    const newdate = year + "-" + month + "-" + day;
    return newdate;
  }

  const canSubmitForm = () => {
    const {title, description, startDate, endDate } = form
    return title.length > 0 && description.length > 0
  }

  const handleDateChange = (date, formatted, name) => { 
    setForm(_.set({...form}, name, reformattedDate(date)))
  }
  const handleImageChange = (ev) => { 
    let fileNode = []
    Object.keys(ev.target.files).map(index => {
      const { name, size, type } = ev.target.files[index]

      const result = toBase64(ev.target.files[index]);
      result.then(rs => {
        const file = Object.assign({}, { fileName: name, size, format: type, file: rs })
        fileNode.push(file)
      })     

    })
    setForm(_.set({...form}, 'attachments', fileNode))
  }

  const handleSubmit = () => {
    createUtilityTask(form)
  }

  console.log(form, 'checking form task...')

  return (
    <div>
      <Dialog
        {...data.props}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeNewTaskDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add Task</DialogTitle>
        <Divider />
        <DialogContent>
          <form className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                id="outlined-size-small"
                fullWidth
                variant="outlined"
                size="small"
                value={form.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                name="description"
                label="Description"
                multiline
                fullWidth
                rows="4"
                rowsMax="4"
                value={form.description}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      name="startDate"
                      id="date-picker-inline"
                      label="Start Date"
                      value={form.startDate}
                      onChange={(date, formatted) => handleDateChange(date, formatted, 'startDate')}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      name="endDate"
                      id="date-picker-inline"
                      label="End Date"
                      value={form.endDate}
                      onChange={(date, formatted) => handleDateChange(date, formatted, 'endDate')}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="select-head"
                name="assignedTo"
                placeholder="Select employee to assign to task"
                select
                fullWidth
                className={classes.textField}
                variant="outlined"
                size="small"
                label="Assigned To"
                value={form.assignedTo}
                onChange={handleChange}
              >
                {users && users.map(user => (
                  <MenuItem key={user.uuId} value={user.uuId}>
                    {user.emailAddress}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
              >
                Upload File
                <input
                  name="attachments"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  multiple
                />
              </Button>
            </Grid>
          </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeNewTaskDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!canSubmitForm()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


AddTaskDialog.propTypes = {
  openNewTaskDialog: PropTypes.func,
  openTaskPreviewDialog: PropTypes.func,
  closeNewTaskDialog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: Selectors.makeSelectNewTaskDialog(),
  users: Selectors.makeSelectEmployees(),
});

function mapDispatchToProps(dispatch) {
  return {
    openNewTaskDialog: ev => dispatch(Actions.openNewTaskDialog(ev)),
    openTaskPreviewDialog: ev => dispatch(Actions.openTaskPreviewDialog(ev)),
    createUtilityTask: ev => dispatch(Actions.createUtilityTask(ev)),
    closeNewTaskDialog: () => dispatch(Actions.closeNewTaskDialog()),
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
)(AddTaskDialog);