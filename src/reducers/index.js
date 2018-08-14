import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import entities from './entities';
import merchants from './merchants';

const rootReducer = combineReducers({
  form,
  entities,
  merchants
});

export default rootReducer;
