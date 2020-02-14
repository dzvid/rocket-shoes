import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

// Fetchs the remaning data from the API and includes it in the cart product
// (the result is handled to the reducer)
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  // put is how saga 'Dispatchs' an action
  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
