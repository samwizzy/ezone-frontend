import React from 'react';
import { withStyles } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from '../../Header';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';
import Sidebar2 from '../../Sidebar2';
import theme from './../themeConfig'

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
          <ThemeProvider theme={theme}>
            <Header />
            <Sidebar2
              content={this.props.children}
            />
            {this.props.children}
          </ThemeProvider>
        </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout3);
