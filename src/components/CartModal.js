import React from "react"
import {Modal} from "antd";
import CartContainer from "../containers/CartContainer";

const CartModal = ({modalVisible, setModalVisible, onCheckOut}) => {
    return (
        <Modal
            title="Your Cart"
            style={{top: 20}}
            visible={modalVisible}
            okText={"Check out"}
            onOk={onCheckOut}
            onCancel={() => setModalVisible(!modalVisible)}
        >
            <CartContainer/>
        </Modal>
    )
}

export default CartModal;
