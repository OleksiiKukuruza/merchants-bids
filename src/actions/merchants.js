import { createActions } from 'redux-actions';
import { RSAA, getJSON } from 'redux-api-middleware';
import { merchantListSchema, merchantSchema } from '../schema';
import { normalize } from 'normalizr';

const URL = 'http://5b61d1f507412d00142acee8.mockapi.io/api/merchants';

const MERCHANTS_REQUEST = 'MERCHANTS_REQUEST';
const MERCHANTS_SUCCESS = 'MERCHANTS_SUCCESS';
const MERCHANTS_FAILURE = 'MERCHANTS_FAILURE';

const MERCHANT_REQUEST = 'MERCHANT_REQUEST';
const MERCHANT_SUCCESS = 'MERCHANT_SUCCESS';
const MERCHANT_FAILURE = 'MERCHANT_FAILURE';

const CREATE_MERCHANT_REQUEST = 'CREATE_MERCHANT_REQUEST';
const CREATE_MERCHANT_SUCCESS = 'CREATE_MERCHANT_SUCCESS';
const CREATE_MERCHANT_FAILURE = 'CREATE_MERCHANT_FAILURE';

const UPDATE_MERCHANT_REQUEST = 'UPDATE_MERCHANT_REQUEST';
const UPDATE_MERCHANT_SUCCESS = 'UPDATE_MERCHANT_SUCCESS';
const UPDATE_MERCHANT_FAILURE = 'UPDATE_MERCHANT_FAILURE';

const DELETE_MERCHANT_REQUEST = 'DELETE_MERCHANT_REQUEST';
const DELETE_MERCHANT_SUCCESS = 'DELETE_MERCHANT_SUCCESS';
const DELETE_MERCHANT_FAILURE = 'DELETE_MERCHANT_FAILURE';

const { merchantsRequest, merchantsSuccess, merchantsFailure, deleteMerchantSuccess } = createActions(
  MERCHANTS_REQUEST,
  MERCHANTS_SUCCESS,
  MERCHANTS_FAILURE,
  DELETE_MERCHANT_SUCCESS
);

export { merchantsRequest, merchantsSuccess, merchantsFailure, deleteMerchantSuccess };

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

export const fetchMerchantById = id => ({
  [RSAA]: {
    types: [
      MERCHANT_REQUEST,
      {
        type: MERCHANT_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json, merchantSchema))
      },
      MERCHANT_FAILURE
    ],
    endpoint: `${URL}/${id}`,
    method: 'GET'
  }
});

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

export const updateMerchant = merchant => ({
  [RSAA]: {
    types: [
      UPDATE_MERCHANT_REQUEST,
      {
        type: UPDATE_MERCHANT_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json, merchantSchema))
      },
      UPDATE_MERCHANT_FAILURE
    ],
    endpoint: `${URL}/${merchant.id}`,
    method: 'PUT',
    body: JSON.stringify(merchant)
  }
});

export const deleteMerchant = id => ({
  [RSAA]: {
    types: [
      DELETE_MERCHANT_REQUEST,
      {
        type: DELETE_MERCHANT_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json, merchantSchema))
      },
      DELETE_MERCHANT_FAILURE
    ],
    endpoint: `${URL}/${id}`,
    method: 'DELETE'
  }
});
