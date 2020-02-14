import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
// import userSagas from './user/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
