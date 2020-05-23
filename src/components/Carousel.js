import React from "react"
import {Col, Row, Carousel} from "antd";

const imageStyle = {
    width: "100%",
    height: 'auto'
}
const CarouselComponent = () => {
    return (
        <Row>
            <Col>
                <Carousel autoplay>
                    <div>
                        <img alt={"carousel"} style={imageStyle}
                             src={"https://cdn.tgdd.vn/2020/05/banner/reno3-800-300-800x300.png"}/>
                    </div>
                    <div>
                        <img alt={"carousel"} style={imageStyle}
                             src={"https://cdn.tgdd.vn/2020/05/banner/391FB5AA-9EB3-42C0-BA11-3903D465B516-800x300.png"}/>
                    </div>
                    <div>
                        <img alt={"carousel"} style={imageStyle}
                             src={"https://cdn.tgdd.vn/2020/05/banner/a51-800-300-800x300-2.png"}/>
                    </div>
                    <div>
                        <img alt={"carousel"} style={imageStyle}
                             src={"https://cdn.tgdd.vn/2020/05/banner/800-300-800x300-17.png"}/>
                    </div>
                </Carousel>
            </Col>
        </Row>
    )
}

export default CarouselComponent;
