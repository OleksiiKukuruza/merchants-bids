import { createActions } from 'redux-actions';
import { RSAA, getJSON } from 'redux-api-middleware';
import { merchantListSchema, merchantSchema } from '../schema';
import { normalize } from 'normalizr';

const URL = 'http://5b61d1f507412d00142acee8.mockapi.io/api/merchants';

const MERCHANTS_REQUEST = 'MERCHANTS_REQUEST';
const MERCHANTS_SUCCESS = 'MERCHANTS_SUCCESS';
const MERCHANTS_FAILURE = 'MERCHANTS_FAILURE';

const { merchantsRequest, merchantsSuccess, merchantsFailure } = createActions(
  MERCHANTS_REQUEST,
  MERCHANTS_SUCCESS,
  MERCHANTS_FAILURE
);

export { merchantsRequest, merchantsSuccess, merchantsFailure };

export const fetchMerchants = () => ({
  [RSAA]: {
    types: [
      MERCHANTS_REQUEST,
      {
        type: MERCHANTS_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json, merchantListSchema))
      },
      MERCHANTS_FAILURE
    ],
    endpoint: URL,
    method: 'GET'
  }
});

const CREATE_MERCHANT_REQUEST = 'CREATE_MERCHANT_REQUEST';
const CREATE_MERCHANT_SUCCESS = 'CREATE_MERCHANT_SUCCESS';
const CREATE_MERCHANT_FAILURE = 'CREATE_MERCHANT_FAILURE';

export const createMerchant = merchant => ({
  [RSAA]: {
    types: [
      CREATE_MERCHANT_REQUEST,
      {
        type: CREATE_MERCHANT_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json, merchantSchema))
      },
      CREATE_MERCHANT_FAILURE
    ],
    endpoint: URL,
    method: 'POST',
    body: JSON.stringify(merchant)
  }
});
