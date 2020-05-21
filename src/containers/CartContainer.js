import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { getCartProducts } from "../reducers/Cart";

const CartContainer = ({ cartProducts }) => (
  <Cart cartProducts={cartProducts} />
);

const mapStateToProps = state => {
  return {
    cartProducts: getCartProducts(state)
  };
};

export default connect(mapStateToProps)(CartContainer);
