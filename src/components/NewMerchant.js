import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import CheckboxInput from './CheckboxInput';
import TextInput from './TextInput';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: 2 * theme.spacing.unit
  },
  buttonIcon: {
    marginRight: theme.spacing.unit
  }
});

const NewMerchant = ({ handleSubmit, classes }) => (
  <div className={classes.container}>
    <Field name="firstname" component={TextInput} label="First Name" />
    <Field name="lastname" component={TextInput} label="Last Name" />
    <Field name="email" component={TextInput} type="email" label="Email" />
    <Field name="phone" component={TextInput} type="tel" label="Phone Number" />
    <Field name="hasPremium" component={CheckboxInput} label="Has premium" />
    <Button variant="contained" color="primary" onClick={handleSubmit}>
      <SaveIcon className={classes.buttonIcon} />
      Create Merchant
    </Button>
  </div>
);

NewMerchant.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(NewMerchant);
