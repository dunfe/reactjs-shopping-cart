import { fork } from "redux-saga/effects";
import loginRootSaga from './login'
import addProductRootSaga from "./product";

export default function* rootSaga() {
  yield fork(loginRootSaga);
  yield fork(addProductRootSaga);
}
