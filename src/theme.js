import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: 'none',
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};

export default theme;
