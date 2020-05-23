import React from "react";
import ProductList from "../components/product/ProductList";
import {connect} from "react-redux";
import {getProducts} from "../reducers/Product";
import {addToCart, increaseQuality, removeProduct} from "../action/index";
import {getCartProducts} from "../reducers/Cart";
import {getUser} from '../reducers/Login'

const ProductsContainer = ({title, products, user, addToCart, increaseQuality, cart, removeProduct}) => {
    return (
        <ProductList cart={cart} title={title} user={user} products={products} removeProduct={removeProduct}
                     addToCart={addToCart} increaseQuality={increaseQuality}/>
    )
}

const mapStateToProps = state => {
    return {
        title: "Products",
        products: getProducts(state),
        cart: getCartProducts(state),
        user: getUser(state)
    };
};

const mapDispatchToProps = {
    addToCart,
    increaseQuality,
    removeProduct
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
