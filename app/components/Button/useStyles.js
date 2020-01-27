import { styled, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // "& :hover": {
    //   backgroundColor: theme.palette.common.white,
    //   color: "#fff"
    // }
  }
}));


export default useStyles;