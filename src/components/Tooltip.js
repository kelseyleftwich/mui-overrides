import React from "react";
import { Tooltip, Typography, withStyles } from "@material-ui/core";

const styles = ({ palette: { primary } }) => ({
  tooltip: {
    backgroundColor: "#fff",
    border: `2px solid ${primary.main}`,
    color: primary.main
  },
  arrow: {
    color: primary.main
  }
});

const Tooltips = ({ classes }) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <Tooltip
      arrow
      title={loremIpsum}
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
    >
      <Typography variant="subtitle1" align="center">
        Hover here for tooltip
      </Typography>
    </Tooltip>
  );
};

export default withStyles(styles)(Tooltips);
