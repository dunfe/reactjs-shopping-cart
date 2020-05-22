import {combineReducers} from "redux";
import cartProducts from "./Cart";
import productsReducer from "./Product";
import loginReducer from "./Login";

export default combineReducers({
  cartProducts,
  products: productsReducer,
  loginReducer
});
