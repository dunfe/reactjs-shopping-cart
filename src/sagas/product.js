
import {all, call, fork, select, put, take, takeEvery} from 'redux-saga/effects'

import { ADD_PRODUCT, GET_PRODUCT} from "../constants/ActionTypes";

import {getListProducts} from "../action/index"

import {reduxSagaFirebase} from "../db";

function* addProductSaga(action) {
    yield call(
        reduxSagaFirebase.database.create,
        'products', action.product
    );
}

function* getProductSaga(action) {

}

export default function* addProductRootSaga() {
    yield all([
        takeEvery(ADD_PRODUCT, addProductSaga),
        takeEvery(GET_PRODUCT, getProductSaga),
    ])
}
