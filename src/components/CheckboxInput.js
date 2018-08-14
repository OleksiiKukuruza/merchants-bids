import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxInput = ({ input, ...otherProps }) => (
  <FormControl fullWidth margin="normal">
    <FormControlLabel
      control={<Checkbox {...input} checked={input.value} value="checkbox" />}
      {...otherProps}
    />
  </FormControl>
);

export default CheckboxInput;
