import { combineReducers } from 'redux';
import union from 'lodash.union';
import { combineActions, handleActions } from 'redux-actions';
import {
  deleteMerchantSuccess,
  merchantsFailure,
  merchantsRequest,
  merchantsSuccess
} from '../actions/merchants';

const allIds = handleActions(
  {
    [merchantsSuccess]: (state, { payload: { result } }) =>
      union(state, result),
    [deleteMerchantSuccess]: (state, { payload: { result } }) =>
      state.filter(id => id !== result)
  },
  []
);

const loading = handleActions(
  {
    [merchantsRequest]: () => true,
    [combineActions(merchantsSuccess, merchantsFailure)]: () => false
  },
  false
);

const error = handleActions(
  {
    [merchantsFailure]: (state, { payload }) => payload,
    [merchantsRequest]: () => null
  },
  null
);

const merchants = combineReducers({
  allIds,
  loading,
  error
});

export default merchants;
