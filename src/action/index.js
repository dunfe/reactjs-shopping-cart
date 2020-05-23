export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHECK_OUT = "CHECK_OUT";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CART = "GET_CART";
export const INCREASE_INVENTORY = "INCREASE_INVENTORY";
export const INCREASE_QUALITY = "INCREASE_QUALITY";
export const SYNC_PRODUCT = "SYNC_PRODUCT";
export const SYNC_CART = "SYNC_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";



export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product: product
});

export const addNewProduct = product => ({
    type: ADD_PRODUCT,
    product: product
});

export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    product: product
});


export const increaseInventory = product => ({
    type: INCREASE_INVENTORY,
    product: product
});

export const increaseQuality = product => ({
    type: INCREASE_QUALITY,
    product: product
});

export const getListProducts = (products) => ({
    type: GET_PRODUCT,
    products: products
});

export const syncProduct = (products) => ({
    type: SYNC_PRODUCT,
    products: products
});

export const syncCart = (products) => ({
    type: SYNC_CART,
    products: products
});

export const getListCart = (products) => ({
    type: GET_CART,
    products: products
});

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
});

export const checkOut = cartProducts => ({
    type: CHECK_OUT,
    cartProducts: cartProducts
});
