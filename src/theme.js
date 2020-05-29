import { createMuiTheme } from '@material-ui/core/styles';
import { grey, deepPurple, amber } from '@material-ui/core/colors';

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
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
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
  MuiInputLabel: {
    root: {
      textTransform: 'uppercase',
      fontSize: '1.5rem',
    },
  },
  MuiInput: {
    root: {
      top: theme.spacing(2),
      border: `1px solid ${grey[500]}`,
      outline: `1px solid transparent`,
      padding: theme.spacing(1),
      '&$focused': {
        border: `1px solid ${theme.palette.primary.main}`,
        outline: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: '#fff',
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    arrow: {
      color: theme.palette.primary.main,
    },
  },
};

export default theme;
