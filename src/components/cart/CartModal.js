import React from "react"
import {Modal} from "antd";
import CartContainer from "../../containers/CartContainer";
import _ from "lodash"

const CartModal = ({modalVisible, setModalVisible, checkOut, cart}) => {

    function success() {
        if (_.size(cart) > 0) {
            Modal.success({
                content: 'Thank you!',
            });
        } else {
            Modal.error({
                title: 'Something is wrong',
                content: 'Please try again',
            });
        }
    }

    return (
        <Modal
            title="Your Cart"
            style={{top: 20}}
            visible={modalVisible}
            okText={"Check out"}
            onOk={() => {
                success()
                checkOut()
            }}
            onCancel={() => setModalVisible(!modalVisible)}
        >
            <CartContainer/>
        </Modal>

    )
}

export default CartModal;
