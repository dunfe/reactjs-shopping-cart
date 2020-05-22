import {Menu} from "antd";
import React, {useState} from "react";
import {ShoppingCartOutlined} from "@ant-design/icons";
import CartModal from "./CartModal";

const cartStyle = {
    float: "right"
};

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <CartModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
            <Menu mode="horizontal" style={{minHeight: 50}}>
                <Menu.Item
                    key="1"
                    icon={<ShoppingCartOutlined/>}
                    style={cartStyle}
                    onClick={() => setModalVisible(!modalVisible)}
                >
                    Your cart
                </Menu.Item>
            </Menu>
        </div>

    );
};

export default Header;
