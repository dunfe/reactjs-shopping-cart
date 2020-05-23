import {Button, List} from "antd";
import React from "react";
import _ from "lodash"

const CartProduct = ({cartProducts, removeFromCart}) => {
    const arr = _.values(cartProducts)
    return (
        <List
            itemLayout="horizontal"
            dataSource={arr}
            renderItem={item => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={item.title}
                        description={"Price: " + item.price + " Quality: " + item.quality}
                    />
                    <Button type="link" onClick={() => removeFromCart(item)}>Remove</Button>
                </List.Item>
            )}
        />
    );
};

export default CartProduct;
