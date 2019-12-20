import React from 'react';
import { withStyles } from '@material-ui/core';
import Header from '../../Header';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';
import Sidebar2 from '../../Sidebar2';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
});

class Layout3 extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Sidebar2 />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout3);
