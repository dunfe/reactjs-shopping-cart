import React from "react";
import {Tooltip, Card, Col, List} from "antd";
import Product from "./Product";
import _ from "lodash"
import {DeleteOutlined, ShoppingOutlined} from '@ant-design/icons';

const imageStyle = {
    width: "100%",
    height: "auto",
    padding: 20
};

const iconStyle = {
    fontSize: 30
}

const addToCartButtonStyle = {
    fontSize: 30,
}

const deleteButtonStyle = {
    fontSize: 30,
}

const ProductItem = ({products, addToCart, user, cart, increaseQuality, layout, removeProduct}) => {
    const onAddToCart = values => {
        if (!_.some(cart, {"id": values.id})) {
            console.log("add")
            addToCart(values)
        } else {
            console.log("increase")
            increaseQuality(values)
        }
    }
    const addToCartButton = (item) => {
        if (user) {
            return [<Tooltip title="Add to cart">
                <ShoppingOutlined style={addToCartButtonStyle}
                                  key="add" onClick={() => onAddToCart(item)}/>
            </Tooltip>,
                <DeleteOutlined style={deleteButtonStyle} onClick={() => removeProduct(item)} key="delete"/>]
        } else {
            return [
                <Tooltip title="Add to cart">
                    <ShoppingOutlined style={addToCartButtonStyle}
                                      key="add" onClick={() => onAddToCart(item)}/>
                </Tooltip>
            ]
        }
    }
    if (layout) {
        return _.map(products, (item) => (
            <Col xs={24} sm={12} md={6} key={item.id}>
                <Card cover={<img style={imageStyle} alt="example" src={item.link}/>}
                      actions={addToCartButton(item)}>
                    <Product
                        title={item.title}
                        price={item.price}
                        inventory={item.inventory}
                        layout={layout}
                    />
                </Card>
            </Col>
        ));
    } else {
        console.log(products)
        return (
            <Col span={24}>
                <List
                    bordered
                    dataSource={products}
                    renderItem={item =>
                        <List.Item actions={addToCartButton(item)}><Product
                            title={item.title}
                            layout={layout}
                            price={item.price}
                            inventory={item.inventory}
                        />
                        </List.Item>
                    }
                />
            </Col>
        )
    }
};

export default ProductItem;
