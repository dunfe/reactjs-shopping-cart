import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {ShopOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Sider} = Layout;
const {SubMenu} = Menu;

const logoStyle = {
    height: 32,
    color: "white",
    margin: 16,
    fontSize: 18
};

const UserSider = ({loggedIn, user, login, logout}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            style={{minHeight: "100vh"}}
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
        >
            <div className="logo" style={logoStyle}>
                {collapsed ? "React" : "React Shopping Cart"}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <SubMenu key="sub1" icon={<UserOutlined/>} title={loggedIn ? user.displayName : 'User'}>
                    <Menu.Item key="2" disabled={loggedIn ? false : true}>
                        <Link to="/add">Add product</Link>
                    </Menu.Item>
                    {loggedIn ? <Menu.Item key="4" onClick={logout}>Log Out</Menu.Item> :
                        <Menu.Item key="3" onClick={login}>Log In</Menu.Item>}
                </SubMenu>
                <Menu.Item key="1" icon={<ShopOutlined/>}>
                    <Link to="/">Shop</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default UserSider;
