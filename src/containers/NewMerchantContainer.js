import { connect } from 'react-redux';
import { compose } from 'recompose';
import NewMerchant from '../components/NewMerchant';
import { createMerchant } from '../actions/merchants';
import { reduxForm } from 'redux-form';

const withData = connect(
  null,
  {
    createMerchant
  }
);

const withForm = reduxForm({
  form: 'newMerchant',
  onSubmit: (merchant, dispatch, { createMerchant }) =>
    createMerchant(merchant),
  onSubmitSuccess: (merchant, dispatch, { history }) =>
    history.push('/merchants')
});

const NewMerchantContainer = compose(
  withData,
  withForm
)(NewMerchant);

export default NewMerchantContainer;
