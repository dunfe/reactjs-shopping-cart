import {ADD_TO_CART, CHECK_OUT, REMOVE_FROM_CART, GET_CART} from "../action";

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case CHECK_OUT:
      return [];
    case REMOVE_FROM_CART:
      return state.filter(product => {
        return product.id !== action.id
      });
    case ADD_TO_CART:
      return {
        ...state
      }
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
