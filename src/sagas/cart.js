import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {ADD_TO_CART, INCREASE_QUALITY, REMOVE_FROM_CART, CHECK_OUT} from "../action";

import {getListCart, syncCart} from "../action/index"
import _ from "lodash"
import {reduxSagaFirebase} from "../db";

function* addToCartSaga(action) {
    try{
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const it = _.find(products, {"title": action.product.title, "price": action.product.price})
        const key = _.findKey(products, action.product)
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
        const cart = yield call(reduxSagaFirebase.database.read, 'cart');
        const thisCart = _.find(cart, {"title": action.product.title, "price": action.product.price})
        const thisKey = _.findKey(cart, {"title": action.product.title, "price": action.product.price})
        if(thisCart && thisKey) {
            yield call(
                reduxSagaFirebase.database.patch,
                `cart/${thisKey}`, {quality: thisCart.quality + 1}
            );
        }
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const it = _.find(products, {"title": action.product.title, "price": action.product.price})
        const key = _.findKey(products, action.product)
        if (it && key){
            yield call(
                reduxSagaFirebase.database.patch,
                `products/${key}`, {inventory: it.inventory - 1}
            );
        }
        yield fork(getCartSaga)
    } catch (e) {
        console.log(e)
    }
}

function* removeFromCartSaga(action) {
    try{
        const cart = yield call(reduxSagaFirebase.database.read, 'cart');
        const thisCart = _.find(cart, {"title": action.product.title, "price": action.product.price})
        const thisKey = _.findKey(cart, {"title": action.product.title, "price": action.product.price})
        if(thisCart && thisKey) {
            yield call(
                reduxSagaFirebase.database.delete,
                `cart/${thisKey}`
            );
        }
        const products = yield call(reduxSagaFirebase.database.read, 'products');
        const thisProduct = _.find(products, {"title": action.product.title, "price": action.product.price})
        const thisProductKey = _.findKey(products, {"title": action.product.title, "price": action.product.price})
        if(thisProduct && thisProductKey) {
            yield call(
                reduxSagaFirebase.database.patch,
                `products/${thisProductKey}`, {inventory: thisProduct.inventory + thisCart.quality}
            );
        }

        yield fork(getCartSaga)
    } catch (e) {
        console.log(e)
    }
}

function* checkOutSaga() {
    try{
        console.log("check out")
            yield call(
                reduxSagaFirebase.database.delete,
                `cart`
            );
        yield fork(getCartSaga)
    } catch (e) {
        console.log(e)
    }
}

function* syncCartSaga() {
    yield fork(reduxSagaFirebase.database.sync, 'cart', {
        successActionCreator: syncCart
    })
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
        takeEvery(REMOVE_FROM_CART, removeFromCartSaga),
        takeEvery(CHECK_OUT, checkOutSaga),
        fork(getCartSaga),
        fork(syncCartSaga),

    ])
}
