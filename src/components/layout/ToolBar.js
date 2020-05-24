import React from "react"
import {Col, Row, Input} from "antd";
import {AppstoreOutlined, UnorderedListOutlined} from "@ant-design/icons";
import _ from "lodash";

const { Search } = Input;
const fontSize = {
    fontSize: 30,
    float: "right",
    paddingLeft: 10
}

const ToolBarComponent = ({title, setGrid, data, setData}) => {

    const onSearchClick = (value) => {
        const filtered = _.filter(data, function (item) {
            return item.title.indexOf(value) !== -1;
        });
        setData(filtered)
    }

    return (
        <Row justify="space-between" style={{paddingTop: 20}}>
            <Col span={6} key={"1"}>
                <h1>{title}</h1>
            </Col>
            <Col span={6} key={"2"}>

            </Col>
            <Col span={12} key={"4"}>
                <Row justify="space-between">
                    <Col span={18}>
                        <Search
                            placeholder="input search text"
                            enterButton
                            onSearch={value => onSearchClick(value)}
                        />
                    </Col>
                    <Col span={6}>
                        <AppstoreOutlined style={fontSize} onClick={() => setGrid(true)}/>
                        <UnorderedListOutlined style={fontSize} onClick={() => setGrid(false)}/>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}

export default ToolBarComponent;
