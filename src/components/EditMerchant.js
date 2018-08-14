import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const EditMerchant = ({
  handleSubmit,
  deleteMerchant,
  match: {
    params: { id }
  },
  history
}) => (
  <div>
    <Field name="firstname" component="input" placeholder="First Name" />
    <Field name="lastname" component="input" placeholder="Last Name" />
    <Field name="email" component="input" type="email" placeholder="Email" />
    <Field
      name="phone"
      component="input"
      type="tel"
      placeholder="Phone Number"
    />
    <Field name="hasPremium" component="input" type="checkbox" />
    <Button
      variant="contained"
      color="secondary"
      onClick={() => deleteMerchant(id).then(() => history.push('/merchants'))}
    >
      <DeleteIcon />
      Remove
    </Button>
    <Button variant="contained" onClick={handleSubmit}>
      <SaveIcon />
      Save
    </Button>
  </div>
);

EditMerchant.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  deleteMerchant: PropTypes.func.isRequired
};

export default EditMerchant;
