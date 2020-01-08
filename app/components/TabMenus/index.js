import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.primary.main,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} square>
      <Tabs
        style={{border: '1px solid red'}}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // centered
      >
        <Tab label="Organizational info" />
        <Tab label="Location" />
        <Tab label="Department" />
      </Tabs>
    </Paper>
  );
}