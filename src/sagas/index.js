import { fork } from "redux-saga/effects";
import loginRootSaga from './login'
import addProductRootSaga from "./product";
import addToCartRootSaga from "./cart";

export default function* rootSaga() {
  yield fork(loginRootSaga);
  yield fork(addProductRootSaga);
  yield fork(addToCartRootSaga);
}
