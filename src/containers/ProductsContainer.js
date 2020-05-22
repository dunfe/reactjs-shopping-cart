import React from "react";
import ProductList from "../components/ProductList";
import {connect} from "react-redux";
import {getProducts} from "../reducers/Product";
import {addToCart, getListProducts} from "../action";


const ProductsContainer = ({title, products, addToCart, getListProducts}) => {
    return (
        <ProductList title={title} products={products} addToCart={addToCart} getListProducts={getListProducts}/>
    )
}

const mapStateToProps = state => {
    return {
        title: "Products",
        products: getProducts(state)
    };
};

const mapDispatchToProps = {
    addToCart,
    getListProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
