import React from "react";
import Header from "../components/layout/Header";
import {connect} from "react-redux";
import {checkOut} from "../action/index"
import { getCartProducts } from "../reducers/Cart"

const HeaderContainer = ({checkOut, cart}) => {
    return (
        <div>
            <Header checkOut={checkOut} cart={cart} />
        </div>
    )
}

const mapStateToProps = state => ({
    cart: getCartProducts(state)
})

const mapDispatchToProps = {
    checkOut
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
