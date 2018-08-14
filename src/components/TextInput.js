import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, ...otherProps }) => (
  <TextField {...input} {...otherProps} fullWidth margin="normal" />
);

export default TextInput;
