import React from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import { amber, deepPurple } from '@material-ui/core/colors';

const styles = ({ theme }) => ({
  default: {
    borderRadius: 0,
    textTransform: 'none',
  },
  primary: {
    '&:hover': {
      backgroundColor: amber[500],
      color: deepPurple[900],
    },
  },
  secondary: {
    fontWeight: 700,
  },
});

const Buttons = ({ classes }) => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button
          disableElevation
          variant="contained"
          color="default"
          className={classes.default}
        >
          Default
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={clsx(classes.default, classes.primary)}
          disableElevation
        >
          Primary
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          className={clsx(classes.default, classes.secondary)}
          disableElevation
        >
          Secondary
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Buttons);
