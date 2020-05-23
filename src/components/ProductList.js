import React, {useState} from "react";
import {Col, Row, Carousel} from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import ProductItem from "./ProductItem";

const fontSize = {
    fontSize: 30,
    float: "right",
    paddingLeft : 10
}

const imageStyle = {
    width: "100%",
    height: 'auto'
}

const ProductList = ({title, products = [], addToCart, user, cart, increaseQuality, removeProduct}) => {
    const [grid, setGrid] = useState(true);

    return (
        <div className="site-card-wrapper" style={{margin: 10}}>
            <Row>
                <Col>
                <Carousel autoplay>
    <div>
      <img style={imageStyle} src={"https://cdn.tgdd.vn/2020/05/banner/reno3-800-300-800x300.png"} />
    </div>
    <div>
    <img style={imageStyle} src={"https://cdn.tgdd.vn/2020/05/banner/391FB5AA-9EB3-42C0-BA11-3903D465B516-800x300.png"} />
    </div>
    <div>
    <img style={imageStyle} src={"https://cdn.tgdd.vn/2020/05/banner/a51-800-300-800x300-2.png"} />
    </div>
    <div>
    <img style={imageStyle} src={"https://cdn.tgdd.vn/2020/05/banner/800-300-800x300-17.png"} />
    </div>
  </Carousel>,
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={12} key={"1"}>
                    <h1>{title}</h1>
                </Col>
                <Col span={6} key={"2"}/>
                <Col span={6} key={"3"} flex={5} style={{float: "right"}}>
                <AppstoreOutlined style={fontSize} onClick={() => setGrid(true)} />
                    <UnorderedListOutlined style={fontSize} onClick={() => setGrid(false)} />
                </Col>
            </Row>
            <Row justify="space-around" gutter={[16, 16]} style={{marginTop: 20}}>
                <ProductItem
                    cart={cart}
                    removeProduct={removeProduct}
                    increaseQuality={increaseQuality}
                    products={products}
                    addToCart={addToCart}
                    layout={grid}
                    user={user}
                />
            </Row>
        </div>
    )
}
export default ProductList;
