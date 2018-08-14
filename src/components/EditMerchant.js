import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';

const styles = theme => ({
  container: {
    padding: 2 * theme.spacing.unit
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  deleteButton: {
    marginRight: 2 * theme.spacing.unit
  },
  buttonIcon: {
    marginRight: theme.spacing.unit
  }
});

const EditMerchant = ({
  handleSubmit,
  deleteMerchant,
  match: {
    params: { id }
  },
  history,
  classes
}) => (
  <div className={classes.container}>
    <Field name="firstname" component={TextInput} label="First Name" />
    <Field name="lastname" component={TextInput} label="Last Name" />
    <Field name="email" component={TextInput} type="email" label="Email" />
    <Field name="phone" component={TextInput} type="tel" label="Phone Number" />
    <Field name="hasPremium" component={CheckboxInput} label="Has premium" />
    <div className={classes.buttons}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.deleteButton}
        onClick={() =>
          deleteMerchant(id).then(() => history.push('/merchants'))
        }
      >
        <DeleteIcon className={classes.buttonIcon} />
        Remove
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        <SaveIcon className={classes.buttonIcon} />
        Save
      </Button>
    </div>
  </div>
);

EditMerchant.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  deleteMerchant: PropTypes.func.isRequired
};

export default withStyles(styles)(EditMerchant);
