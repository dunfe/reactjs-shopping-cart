import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {ADD_TO_CART} from "../constants/ActionTypes";

import {getCart} from "../action/index"
import { reduxSagaFirebase } from "../db";


function* addToCart(action) {
    yield call(
        reduxSagaFirebase.database.create,
        'cart', action.product
    );
    yield fork(getCartSaga)
}

function* getCartSaga() {
    try {
        const cart = yield call(reduxSagaFirebase.database.read, 'cart')
        console.log(cart);
        if (cart) {
            yield put(getCart(cart))
        } else {
            console.log("Got nothing");
        }
    } catch (error) {
        console.log("Fail to get cart from firebase")
    }
}

export default function* addToCartRootSaga() {
    yield all([
        takeEvery(ADD_TO_CART, addToCart),
        fork(getCartSaga),
    ])
}
