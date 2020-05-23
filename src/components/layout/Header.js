import {Menu} from "antd";
import React, {useState} from "react";
import {ShoppingCartOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";
import CartModal from "../cart/CartModal";

const cartStyle = {
    float: "right"
};

const Header = ({checkOut, cart}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <CartModal cart={cart} checkOut={checkOut} setModalVisible={setModalVisible} modalVisible={modalVisible}/>
            <Menu mode="horizontal" style={{minHeight: 50}}>
                <Menu.Item key="2" icon={<FacebookOutlined/>}>
                    Facebook
                </Menu.Item>
                <Menu.Item key="3" icon={<InstagramOutlined/>}>
                    Instagram
                </Menu.Item>
                <Menu.Item key="4" icon={<TwitterOutlined/>}>
                    Twitter
                </Menu.Item>
                <Menu.Item
                    key="5"
                    disabled="disabled"
                >
                    09192394495
                </Menu.Item>
                <Menu.Item
                    key="6"
                    disabled="disabled"
                >
                    abc@gmail.com
                </Menu.Item>
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
