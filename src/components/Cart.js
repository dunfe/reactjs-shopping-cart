import React from "react";
import CartProduct from "./CartProduct";

const Cart = ({ cartProducts }) => {
  const hasProducts = cartProducts?.length > 0;
  const total = hasProducts
    ? cartProducts.reduce((accum, item) => accum + item.price * item.quality, 0)
    : 0;
  const nodes = hasProducts ? (
    <CartProduct cartProducts={cartProducts} />
  ) : (
    <p>Cart is empty</p>
  );

  return (
    <div style={{ margin: 20 }}>
      <div>{nodes}</div>
      <p>Total: {total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
