import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {ADD_PRODUCT, INCREASE_INVENTORY, REMOVE_PRODUCT} from "../action";

import {getListProducts, syncProduct} from "../action/index"
import _ from "lodash"
import {reduxSagaFirebase} from "../db";

function* addProductSaga(action) {
    yield call(
        reduxSagaFirebase.database.create,
        'products', action.product
    );
    yield fork(getProductSaga)
}

function* increaseInventorySaga(action) {
    try {
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const it = _.find(products, {"title": action.product.title, "price": action.product.price})
        const key = _.findKey(products, {"title": action.product.title, "price": action.product.price})
        console.log(key)
        yield call(
            reduxSagaFirebase.database.patch,
            `products/${key}`, {inventory: it.inventory + action.product.inventory}
        );
        yield fork(getProductSaga)
    } catch (e) {
        console.log(e)
    }
}

function* removeProductSaga(action) {
    try {
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const key = _.findKey(products, action.product)
        yield call(
            reduxSagaFirebase.database.delete,
            `products/${key}`
        );
        yield fork(getProductSaga)
    } catch (e) {
        console.log(e)
    }
}

function* getProductSaga() {
    try {
        const products = yield call(reduxSagaFirebase.database.read, 'products')
        if (products) {
            yield put(getListProducts(products))
        } else {
            console.log("Got nothing");
        }
    } catch (error) {
        console.log("Fail to get product from firebase")
    }
}

function* syncProductSaga() {
    yield fork(reduxSagaFirebase.database.sync, 'products', {
        successActionCreator: syncProduct
    })
}

export default function* addProductRootSaga() {
    yield all([
        takeEvery(ADD_PRODUCT, addProductSaga),
        takeEvery(INCREASE_INVENTORY, increaseInventorySaga),
        takeEvery(REMOVE_PRODUCT, removeProductSaga),
        fork(getProductSaga),
        fork(syncProductSaga)
    ])
}
