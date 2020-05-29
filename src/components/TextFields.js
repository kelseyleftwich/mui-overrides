import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { grey, deepPurple } from "@material-ui/core/colors";

const styles = ({ spacing, palette: { primary } }) => ({
  label: {
    textTransform: "uppercase",
    fontSize: "1.5rem"
  },
  input: {
    top: spacing(2),
    border: `1px solid ${grey[500]}`,
    outline: `1px solid transparent`,
    padding: spacing(1),
    "&$focused": {
      border: `1px solid ${deepPurple[500]}`,
      outline: `1px solid ${deepPurple[500]}`
    }
  },
  focused: {}
});

const TextFields = ({ classes }) => {
  return (
    <div>
      <TextField
        label="Role or Title"
        placeholder="Developer"
        fullWidth
        InputLabelProps={{
          shrink: true,
          classes: {
            root: classes.label
          }
        }}
        InputProps={{
          classes: {
            root: classes.input,
            focused: classes.focused
          },
          disableUnderline: true
        }}
      />
    </div>
  );
};

export default withStyles(styles)(TextFields);
