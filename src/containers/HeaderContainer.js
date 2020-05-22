import React from "react";
import Header from "../components/Header";
import {connect} from "react-redux";
import {checkOut} from "../action/index";
import CartModal from "../components/CartModal";

const HeaderContainer = ({checkOut}) => {
    return (
        <div>
            <Header checkOut={checkOut}/>
            <CartModal/>
        </div>
    )
}
export default connect(
    null,
    {checkOut}
)(HeaderContainer);
