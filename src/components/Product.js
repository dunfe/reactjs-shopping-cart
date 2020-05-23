import React from "react";
import {Card} from "antd"

const {Meta} = Card

const Product = ({title, inventory, price}) => {
        return (
            <Meta
                title={title}
                description={<div><h2 style={{color: "red"}}>{price}$</h2>
                    <p>Inventory: {inventory > 0 ? inventory : "Sold out"}</p></div>}
            >
            </Meta>
        )
}

export default Product;
