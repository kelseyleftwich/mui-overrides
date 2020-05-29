import React from 'react';
import { TextField } from '@material-ui/core';

const TextFields = ({ classes }) => {
  return (
    <div>
      <TextField label="Role or Title" placeholder="Developer" fullWidth />
    </div>
  );
};

export default TextFields;
