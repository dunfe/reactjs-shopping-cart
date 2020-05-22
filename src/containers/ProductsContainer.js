import React from "react";
import ProductList from "../components/ProductList";
import {connect} from "react-redux";
import {getProducts} from "../reducers/Product";
import {addToCart, increaseQuality} from "../action";
import { getCartProducts } from "../reducers/Cart";


const ProductsContainer = ({title, products, addToCart, increaseQuality, cart}) => {
    return (
        <ProductList cart={cart} title={title} products={products} addToCart={addToCart} increaseQuality={increaseQuality}/>
    )
}

const mapStateToProps = state => {
    return {
        title: "Products",
        products: getProducts(state),
        cart: getCartProducts(state)
    };
};

const mapDispatchToProps = {
    addToCart,
    increaseQuality
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
