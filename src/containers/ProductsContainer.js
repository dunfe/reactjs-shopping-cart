import React, {useEffect} from "react";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { getProducts } from "../reducers/Product";
import { addToCart } from "../action";


const ProductsContainer = ({ title, products, addToCart}) => {
  return (
      <ProductList title={title} products={products} addToCart={addToCart}/>
  )
}

const mapStateToProps = state => {
  return {
    title: "Products",
    products: getProducts(state)
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
