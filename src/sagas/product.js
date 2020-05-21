
import {all, call, fork, select, put, take, takeEvery} from 'redux-saga/effects'

import { ADD_PRODUCT} from "../constants/ActionTypes";

import {reduxSagaFirebase} from "../db";

function* addProductSaga() {
        const state = yield select(state => state)
        console.log(state);
    console.log('Haha')

        const key = yield call(reduxSagaFirebase.database.create, 'products', {
            done: false,
            label: 'Do this',
        });
    console.log(key);
}

function* getProductSaga() {
        yield call(reduxSagaFirebase.database.read, 'products')
}

function* getProductStatusWatcher() {
    const channel = yield call(reduxSagaFirebase.database.channel, 'products')
    while (true) {
        const {products} = yield take(channel)

        console.log(products)
    }
}

export default function* addProductRootSaga() {
    yield all([
        takeEvery(ADD_PRODUCT, addProductSaga),
    ])
}
