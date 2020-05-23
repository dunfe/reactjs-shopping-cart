import {ADD_TO_CART, CHECK_OUT, REMOVE_FROM_CART, GET_CART, SYNC_CART, REMOVE_PRODUCT} from "../action";

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return {
        ...state
      }
    case CHECK_OUT:
      return {
        ...state
      }
    case REMOVE_FROM_CART:
      return {
        ...state
      }
    case ADD_TO_CART:
      return {
        ...state
      }
      case SYNC_CART:
    case GET_CART:
      return {
        ...state,
        cart: action.products
      }
    default:
      return state;
  }
};
export const getCartProducts = state => state.cartProducts.cart;

export default cartProducts;
