import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const useStyles = makeStyles(theme => ({
    list: {
        flexGrow: 1,
        width: '100%',
        '& .MuiListItem-root': {
            margin: theme.spacing(1, 0)
        }
    },
    inline: {
        display: 'inline',
    }
}));

const UserChat = props => {
    const classes = useStyles()

    return (
        <List className={classes.list}>
            <ListItem alignItems="flex-start" component={Paper}>
            <ListItemAvatar>
                <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary="Christian"
                secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                    Is the work done?
                    </Typography>
                </React.Fragment>
                }
            />
            </ListItem>
            <ListItem alignItems="flex-start" component={Paper}>
            <ListItemAvatar>
                <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary="Christian"
                secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                    Is the work done?
                    </Typography>
                </React.Fragment>
                }
            />
            </ListItem>
            <ListItem alignItems="flex-start" component={Paper}>
            <ListItemAvatar>
                <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary="Christian"
                secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                    Is the work done?
                    </Typography>
                </React.Fragment>
                }
            />
            </ListItem>
        </List>
    )
}

UserChat.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
    return {};
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(UserChat);