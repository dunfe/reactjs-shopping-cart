import {ADD_PRODUCT, ADD_TO_CART, CHECK_OUT, GET_PRODUCT, REMOVE_FROM_CART, GET_CART} from "../constants/ActionTypes";

export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
});

export const addNewProduct = product => ({
    type: ADD_PRODUCT,
    product: product
});

export const getListProducts = (products) => ({
    type: GET_PRODUCT,
    products: products
});

export const getCart = (cart) => ({
    type: GET_CART,
    cart: cart
});

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
});

export const checkOut = cartProducts => ({
    type: CHECK_OUT,
    cartProducts: cartProducts
});
