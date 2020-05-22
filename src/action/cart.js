import {REMOVE_FROM_CART} from "../constants/ActionTypes";

export const types = {
    ADD_TO_CART: {
        REQUEST: 'ADD_TO_CART.REQUEST',
        SUCCESS: 'ADD_TO_CART.SUCCESS',
        FAILURE: 'ADD_TO_CART.FAILURE',
    },
    CHECK_OUT: {
        REQUEST: 'CHECK_OUT.REQUEST',
        SUCCESS: 'CHECK_OUT.SUCCESS',
        FAILURE: 'CHECK_OUT.FAILURE',
    },
    REMOVE_FROM_CART: {
        REQUEST: 'CHECK_OUT.REQUEST',
        SUCCESS: 'CHECK_OUT.SUCCESS',
        FAILURE: 'CHECK_OUT.FAILURE',
    }
}
export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
})

export const addToCart = () => ({
    type: types.ADD_TO_CART.REQUEST,
})

export const addToCartSuccess = cart => ({
    type: types.ADD_TO_CART.SUCCESS,
    cart,
})

export const addToCartFailure = error => ({
    type: types.ADD_TO_CART.FAILURE,
    error,
})

export const checkOut = () => ({
    type: types.CHECK_OUT.REQUEST,
})

export const checkOutSuccess = () => ({
    type: types.CHECK_OUT.SUCCESS,
})

export const checkOutFailure = error => ({
    type: types.CHECK_OUT.FAILURE,
    error,
})
