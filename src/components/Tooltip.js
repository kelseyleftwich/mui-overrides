import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';

const Tooltips = ({ classes }) => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <Tooltip title={loremIpsum}>
      <Typography variant="subtitle1" align="center">
        Hover here for tooltip
      </Typography>
    </Tooltip>
  );
};

export default Tooltips;
