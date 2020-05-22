import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { getCartProducts } from "../reducers/Cart";
import  {removeFromCart} from "../action/cart";

const CartContainer = ({ cartProducts, removeFromCart }) => (
  <Cart cartProducts={cartProducts} removeFromCart={removeFromCart}/>
);

const mapStateToProps = state => {
  return {
    cartProducts: getCartProducts(state)
  };
};

export default connect(mapStateToProps, {removeFromCart})(CartContainer);
