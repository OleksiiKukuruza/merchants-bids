import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import MerchantList from '../components/MerchantList';
import { fetchMerchants } from '../actions/merchants';
import { getMerchants } from '../selectors';

const mapStateToProps = state => ({
  merchants: getMerchants(state)
});

const withData = connect(
  mapStateToProps,
  {
    fetchMerchants
  }
);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchMerchants();
  }
});

const MerchantListContainer = compose(
  withData,
  withLifecycle
)(MerchantList);

export default MerchantListContainer;
