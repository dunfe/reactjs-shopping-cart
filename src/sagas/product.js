import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {ADD_PRODUCT} from "../constants/ActionTypes";

import {getListProducts} from "../action/index"

import {reduxSagaFirebase} from "../db";

function* addProductSaga(action) {
    yield call(
        reduxSagaFirebase.database.create,
        'products', action.product
    );
    yield fork(getProductSaga)
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

export default function* addProductRootSaga() {
    yield all([
        takeEvery(ADD_PRODUCT, addProductSaga),
        fork(getProductSaga),
    ])
}
