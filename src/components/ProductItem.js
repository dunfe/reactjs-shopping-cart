import React, {useEffect} from "react";
import {Button, Card, Col} from "antd";
import Product from "./Product";

const imageStyle = {
  width: "100%",
  height: "auto"
};

const ProductItem = ({products, addToCart, getListProducts}) => {
  useEffect(() => {
    getListProducts(products)
  }, [products]);
  return (products || []).map(item => (
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
