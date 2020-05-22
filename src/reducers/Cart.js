import {REMOVE_FROM_CART, ADD_TO_CART, CHECK_OUT} from "../constants/ActionTypes";

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case CHECK_OUT:
      return [];
    case REMOVE_FROM_CART:
      return state.filter(product => {
          return product.id !== action.id
      });
    case ADD_TO_CART:
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
