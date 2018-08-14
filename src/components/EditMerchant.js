import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const EditMerchant = ({ handleSubmit }) => (
  <div>
    <Field
      name="firstname"
      component="input"
      placeholder="First Name"
    />
    <Field
      name="lastname"
      component="input"
      placeholder="Last Name"
    />
    <Field
      name="email"
      component="input"
      type="email"
      placeholder="Email"
    />
    <Field
      name="phone"
      component="input"
      type="tel"
      placeholder="Phone Number"
    />
    <Field
      name="hasPremium"
      component="input"
      type="checkbox"
    />
    <button onClick={handleSubmit}>
      Update Merchant Details
    </button>
  </div>
);

EditMerchant.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default EditMerchant;
