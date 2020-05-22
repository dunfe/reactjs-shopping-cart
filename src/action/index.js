import {ADD_PRODUCT, ADD_TO_CART, CHECK_OUT, GET_PRODUCT} from "../constants/ActionTypes";

export const addNewProduct = product => ({
    type: ADD_PRODUCT,
    product: product
});

export const getListProducts = (products) => ({
    type: GET_PRODUCT,
    products: products
});

export const addToCart = cartProducts => ({
    type: ADD_TO_CART,
    cartProducts: cartProducts
});

export const checkOut = cartProducts => ({
    type: CHECK_OUT,
    cartProducts: cartProducts
});
