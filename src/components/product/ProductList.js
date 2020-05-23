import React, {useState} from "react";
import {Row} from "antd";
import ProductItem from "./ProductItem";
import CarouselComponent from "../layout/Carousel"
import ToolBarComponent from "../layout/ToolBar"


const ProductList = ({title, products = [], addToCart, user, cart, increaseQuality, removeProduct}) => {
    const [grid, setGrid] = useState(true);

    const [data, setData] = useState(products);
    console.log(data.length)

    return (
        <div className="site-card-wrapper" style={{margin: 10}}>
            <CarouselComponent/>
            <ToolBarComponent title={title} setGrid={setGrid} setData={setData} data={products}/>
            <Row justify="space-around" gutter={[16, 16]} style={{marginTop: 20}}>
                <ProductItem
                    cart={cart}
                    removeProduct={removeProduct}
                    increaseQuality={increaseQuality}
                    products={data.length > 0 ? data : products}
                    addToCart={addToCart}
                    layout={grid}
                    user={user}
                />
            </Row>
        </div>
    )
}
export default ProductList;
