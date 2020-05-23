import React from "react"
import {Col, Row} from "antd";
import {AppstoreOutlined, UnorderedListOutlined} from "@ant-design/icons";

const fontSize = {
    fontSize: 30,
    float: "right",
    paddingLeft: 10
}

const ToolBarComponent = ({title, setGrid}) => (
    <Row justify="space-between">
        <Col span={12} key={"1"}>
            <h1>{title}</h1>
        </Col>
        <Col span={6} key={"2"}/>
        <Col span={6} key={"3"} style={{float: "right"}}>
            <AppstoreOutlined style={fontSize} onClick={() => setGrid(true)}/>
            <UnorderedListOutlined style={fontSize} onClick={() => setGrid(false)}/>
        </Col>
    </Row>
)

export default ToolBarComponent;
