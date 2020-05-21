import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { checkOut } from "../action/index";

const HeaderContainer = ({ checkOut }) => <Header checkOut={checkOut} />;

export default connect(
  null,
  { checkOut }
)(HeaderContainer);
