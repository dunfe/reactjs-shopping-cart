import React from "react";
import {Col, Input, Row} from "antd";
import ProductItem from "./ProductItem";

const {Search} = Input;

const ProductList = ({title, products = [], addToCart, cartProducts}) => {
    return (
        <div className="site-card-wrapper" style={{margin: 10}}>
            <Row justify="space-between">
                <Col span={12} key={"1"}>
                    <h1>{title}</h1>
                </Col>
                <Col span={6} key={"2"}/>
                <Col span={6} key={"3"} style={{float: "right"}}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                </Col>
            </Row>
            <Row justify="space-around" gutter={[16, 16]} style={{marginTop: 20}}>
                <ProductItem
                    cartProducts={cartProducts}
                    products={products}
                    addToCart={addToCart}
                />
            </Row>
        </div>
    )
}
export default ProductList;
