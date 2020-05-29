import React from 'react';
import { Button, Grid } from '@material-ui/core';

const Buttons = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button variant="contained" color="default">
          Default
        </Button>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Grid>

      <Grid item>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
