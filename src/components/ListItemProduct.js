import React from 'react'
import {List} from "antd";

const ListItemProductComponent = ({title, inventory, price}) => (
    <List.Item.Meta
        title={title}
        description={<div><h2 style={{color: "red"}}>{price}$</h2>
            <p>Inventory: {inventory > 0 ? inventory : "Sold out"}</p></div>}
    />
)

export default ListItemProductComponent;
