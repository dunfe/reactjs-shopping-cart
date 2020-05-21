import { combineReducers } from "redux";
import cartProducts from "./Cart";
import products from "./Product";
import loginReducer from "./Login";

export default combineReducers({
  cartProducts,
  products,
  loginReducer
});
