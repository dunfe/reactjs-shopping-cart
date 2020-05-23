import React from "react";
import Cart from "../components/cart/Cart";
import {connect} from "react-redux";
import {getCartProducts} from "../reducers/Cart";
import {removeFromCart} from "../action/index"

const CartContainer = ({cartProducts, removeFromCart}) => (
    <Cart cartProducts={cartProducts} removeFromCart={removeFromCart}/>
);

const mapStateToProps = state => {
  return {
    cartProducts: getCartProducts(state)
  };
};

export default connect(mapStateToProps, {removeFromCart})(CartContainer);
