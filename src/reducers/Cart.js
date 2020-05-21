import { ADD_TO_CART, CHECK_OUT } from "../constants/ActionTypes";
import {types} from "../action/cart"

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case types.CHECK_OUT:
      return [];
    case types.ADD_TO_CART:
      if (state.some(product => product["id"] === action.cartProducts.id)) {
        return state.map(product => {
          if (product["id"] === action.cartProducts.id) {
            return {
              ...product,
              quality: product.quality + 1,
              inventory: action.cartProducts.inventory - 1
            };
          } else {
            return product;
          }
        });
      } else {
        return [
          ...state,
          {
            ...action.cartProducts,
            quality: 1,
            inventory: action.cartProducts.inventory - 1
          }
        ];
      }
    default:
      return state;
  }
};
export const getCartProducts = state => state.cartProducts;

export default cartProducts;
