import { Menu, Modal } from "antd";
import React, { useState } from "react";
import CartContainer from "../containers/CartContainer";
import { ShoppingCartOutlined } from "@ant-design/icons";

const cartStyle = {
  float: "right"
};

const Header = ({ checkOut }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCheckOut = () => {
    checkOut();
    setModalVisible(!modalVisible);
  };
  return (
    <Menu mode="horizontal" style={{ minHeight: 50 }}>
      <Menu.Item
        key="1"
        icon={<ShoppingCartOutlined />}
        style={cartStyle}
        onClick={() => setModalVisible(!modalVisible)}
      >
        Your cart
        <Modal
          title="Your Cart"
          style={{ top: 20 }}
          visible={modalVisible}
          okText={"Check out"}
          onOk={onCheckOut}
          onCancel={() => setModalVisible(!modalVisible)}
        >
          <CartContainer />
        </Modal>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
