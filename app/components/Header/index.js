import React from 'react';
import { fade } from '@material-ui/core/styles';
import {
  withStyles,
  AppBar,
  SwipeableDrawer,
  Grid,
  Typography,
  Toolbar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
  Box,
} from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Menu from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Banner from './banner.jpg';
import Logo from '../../images/logo.svg';
import OctivierLogo from '../../images/octivier-logo.svg';

const styles = theme => ({
  banner: {
    minHeight: '1073px',
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    position: 'relative',
    overflow: 'hidden',
  },
  appBar: {
    boxShadow: theme.shadows[0],
    zIndex: 9999
  },
  text: {
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      lineHeight: 1,
      marginBottom: theme.spacing(2),
    },
  },
  strapline: {
    fontSize: 23,
    fontWeight: 200,
    color: '#E5E5E5',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
  button: {
    backgroundColor: '#A8BF54',
    padding: theme.spacing(1, 6),
    borderRadius: theme.shape.borderRadius,
    opacity: 1,
    marginTop: theme.spacing(2),
    textTransform: 'capitalize',
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#93a847',
    },
  },
  list: {
    width: 250,
    marginTop: '80px'
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(6),
    // color: '#FFFFFF',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    color: theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  logo: {
    color: '#1F70C1',
    maxHeight: '30px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function Header(props) {
  const { classes } = props;

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open, status) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [open]: status });
  };

  const sideList = open => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(open, false)}
      onKeyDown={toggleDrawer(open, false)}
    >
      <List>
        {['Home', 'About Us', 'Our Offerings', 'Wealth Management'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Home /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
      <Divider />
      <List>
        {['Login', 'Sign Up'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === 'Sign Up' ? <PersonAdd /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="absolute" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer('open', true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
          
          <Grid
            justify="space-between" // Add it here :)
            container 
            spacing={24}
          >
            <Grid item style={{display:'flex', alignItems:'center'}}>
              <Typography type="title" color="inherit">
                <Link href='#'>
                  <img src={Logo} className={classes.logo} />
                </Link>
              </Typography>
            </Grid>

            <Grid item>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <img src={OctivierLogo} />
                    </ListItemIcon>
                    <ListItemText primary={'Octiver Communications'} />
                  </ListItem>
                </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.open}
        onClose={toggleDrawer('open', false)}
        onOpen={toggleDrawer('open', true)}
      >
        {sideList('open')}
      </SwipeableDrawer>
    </div>
  );
}

export default withStyles(styles)(Header);
