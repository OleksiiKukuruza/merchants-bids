import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import EditMerchant from '../components/EditMerchant';
import {
  deleteMerchant,
  fetchMerchantById,
  updateMerchant
} from '../actions/merchants';
import { reduxForm } from 'redux-form';
import { getMerchantById } from '../selectors';

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  initialValues: getMerchantById(state, id)
});

const withData = connect(
  mapStateToProps,
  {
    fetchMerchantById,
    updateMerchant,
    deleteMerchant
  }
);

const withLifecycle = lifecycle({
  componentDidMount() {
    const {
      fetchMerchantById,
      match: {
        params: { id }
      }
    } = this.props;
    fetchMerchantById(id);
  }
});

const withForm = reduxForm({
  form: 'editMerchant',
  onSubmit: (merchant, dispatch, { updateMerchant }) =>
    updateMerchant(merchant),
  onSubmitSuccess: (merchant, dispatch, { history }) =>
    history.push('/merchants')
});

const EditMerchantContainer = compose(
  withData,
  withLifecycle,
  withForm
)(EditMerchant);

export default EditMerchantContainer;
