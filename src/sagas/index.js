import { all } from 'redux-saga/effects';
// import vacanciesSaga from './vacanciesSaga';

export default function* root() {
  yield all([
    // vacanciesSaga()
  ]);
}
