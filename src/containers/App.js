import React from "react";
import AddContainer from "./AddContainer";
import HeaderContainer from "./HeaderContainer";
import { Layout } from "antd";
import ProductsContainer from "./ProductsContainer";
import SiderContainer from "./SiderContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { Content } = Layout;
const App = () => (
  <Router>
    <Layout className="layout">
      <SiderContainer />
      <Layout className="site-layout">
        <HeaderContainer style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Route exact path="/">
              <ProductsContainer />
            </Route>
            <Route exact path="/add">
              <AddContainer />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;
