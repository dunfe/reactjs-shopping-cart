import React from "react";
import CartProduct from "./CartProduct";
import _ from "lodash"

const Cart = ({cartProducts, removeFromCart}) => {
    const hasProducts = _.size(cartProducts) > 0;
    const total = hasProducts
        ? _.reduce(cartProducts, (accum, item) => accum + item.price * item.quality, 0)
        : 0;
    const nodes = hasProducts ? (
        <CartProduct cartProducts={cartProducts} removeFromCart={removeFromCart}/>
    ) : (
        <p>Cart is empty</p>
    );

    return (
        <div style={{margin: 20}}>
            <div>{nodes}</div>
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
