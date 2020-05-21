import React from "react";

const Product = ({ title, inventory, price }) => (
  <div>
    <h1>{title}</h1>
    <h2 style={{ color: "red" }}>{price}$</h2>
    <p>Inventory: {inventory}</p>
  </div>
);

export default Product;
