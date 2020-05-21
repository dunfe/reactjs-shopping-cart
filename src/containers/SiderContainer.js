import React  from 'react'
import { connect } from 'react-redux'

import { login, logout } from '../action/login'

import UserSider from "../components/Sider";
import {getUser, getLoggedIn} from "../reducers/Login";

const SiderContainer = ({user, login, logout, loggedIn}) => (<UserSider loggedIn={loggedIn} login={login} logout={logout} user={user}/>);

const mapStateToProps = (state) => {
    return{
        user: getUser(state),
        loggedIn: getLoggedIn(state)
    }
}
export default connect(mapStateToProps, { login, logout})(SiderContainer);


