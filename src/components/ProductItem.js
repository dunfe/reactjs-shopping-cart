import React from "react";
import {Button, Card, Col} from "antd";
import Product from "./Product";
import _ from "lodash"

const imageStyle = {
    width: "100%",
    height: "auto"
};

const ProductItem = ({products, addToCart}) => {
    return _.map(products, (item) => (
        <Col xs={24} sm={12} md={6} key={item.id}>
            <Card cover={<img style={imageStyle} alt="example" src={item.link}/>}>
                <Product
                    title={item.title}
                    price={item.price}
                    inventory={item.inventory}
                />
                <Button
                    disabled={item.inventory > 0 ? "" : "disabled"}
                    onClick={() => addToCart(item)}
                >
                    {item.inventory > 0 ? "Add to cart" : "Sold out"}
                </Button>
            </Card>
        </Col>
    ));
};

export default ProductItem;
