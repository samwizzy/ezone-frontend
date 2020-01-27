/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions';
import * as Selectors from '../selectors';
import LoadingIndicator from '../../../components/LoadingIndicator';
import envelope from '../../../images/envelope.svg';
import directory from '../../../images/directory.svg';
import mail from '../../../images/mail.svg';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    margin: 50,
    background: '#FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
    borderRadius: '20px',
    width: '203px',
    height: '124px',
    padding: theme.spacing(2, 0),
  },
  cardIcon: {
    float: 'left',
  },
  cardContent: {
    marginLeft: theme.spacing(10),
  },
}));

const EmailHome = props => {
  const classes = useStyles();

  const { history } = props;

  const handleClick = link => {
    history.push(link);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={4}>
          <Card
            className={classes.card}
            variant="outlined"
            onClick={() => handleClick('/email/configuration')}
          >
            <CardContent>
              <img alt="" src={envelope} className={classes.cardIcon} />
              <Typography
                className={`${classes.title} ${classes.cardContent}`}
                color="textSecondary"
                gutterBottom
              >
                Email / SMS Configuration
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Card
            className={classes.card}
            variant="outlined"
            onClick={() => handleClick('/email')}
          >
            <CardContent>
              <img alt="" src={directory} className={classes.cardIcon} />
              <Typography
                className={`${classes.title} ${classes.cardContent}`}
                color="textSecondary"
                gutterBottom
              >
                AD Configuration
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Card
            className={classes.card}
            variant="outlined"
            onClick={() => handleClick('/email/template')}
          >
            <CardContent>
              <img alt="" src={mail} className={classes.cardIcon} />
              <Typography
                className={`${classes.title} ${classes.cardContent}`}
                color="textSecondary"
                gutterBottom
              >
                Email Templates
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

EmailHome.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  memo,
)(EmailHome);
