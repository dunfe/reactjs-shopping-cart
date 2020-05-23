import React  from 'react'
import { connect } from 'react-redux'

import { login, logout } from '../action/login'

import UserSider from "../components/layout/Sider";
import {getUser, getLoggedIn} from "../reducers/Login";
import { getListProducts } from "../action/index"

const SiderContainer = ({user, login, logout, loggedIn, getListProducts}) => (<UserSider getListProducts={getListProducts} loggedIn={loggedIn} login={login} logout={logout} user={user}/>);

const mapStateToProps = (state) => {
    return{
        user: getUser(state),
        loggedIn: getLoggedIn(state)
    }
}
export default connect(mapStateToProps, { login, logout, getListProducts})(SiderContainer);


