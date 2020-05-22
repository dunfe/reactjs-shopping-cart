import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {ADD_TO_CART, INCREASE_QUALITY} from "../action";

import {getListCart} from "../action/index"
import _ from "lodash"
import {reduxSagaFirebase} from "../db";

function* addToCartSaga(action) {
    try{
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const it = _.find(products, {"title": action.product.title, "price": action.product.price})
        const key = _.findKey(products, action.product)
        console.log(key)
        yield call(
            reduxSagaFirebase.database.create,
            'cart', {...action.product, quality: 1}
        );
        yield call(
            reduxSagaFirebase.database.patch,
            `products/${key}`, {inventory: it.inventory - 1}
        );
        yield fork(getCartSaga)
    } catch (e) {
        console.log(e)

    }

}

function* increaseQualitySaga(action) {
    try{
        const products = yield call(reduxSagaFirebase.database.read, 'cart');
        const it = _.find(products, {"title": action.product.title, "price": action.product.price})
        const key = _.findKey(products, action.product)
        console.log("haha")
        yield call(
            reduxSagaFirebase.database.patch,
            `cart/${key}`, {quality: it.quality + 1}
        );
        yield call(
            reduxSagaFirebase.database.patch,
            `products/${key}`, {inventory: it.inventory - 1}
        );
        yield fork(getCartSaga)
    } catch (e) {
        console.log(e)
    }
}

function* getCartSaga() {
    try {
        const products = yield call(reduxSagaFirebase.database.read, 'cart')
        if (products) {
            yield put(getListCart(products))
        } else {
            console.log("Got nothing");
        }
    } catch (error) {
        console.log("Fail to get product from firebase")
    }
}

export default function* addToCartRootSaga() {
    yield all([
        takeEvery(ADD_TO_CART, addToCartSaga),
        takeEvery(INCREASE_QUALITY, increaseQualitySaga),
        fork(getCartSaga),
    ])
}
