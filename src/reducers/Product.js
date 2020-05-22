import {ADD_PRODUCT, ADD_TO_CART, GET_PRODUCT} from "../constants/ActionTypes";

function productsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.products
      }
    case ADD_TO_CART:
      console.log(state)
      return {
        ...state, products: state.products.map(product => {
          if (product["id"] === action.cartProducts["id"]) {
            return {
              ...product,
              inventory: action.cartProducts["inventory"] - 1
            };
          }
          return product;
        })
      };
    case ADD_PRODUCT:
      return {
        ...state
      }
    default:
      return state;
  }
}

export const getProducts = state => state.products.products;

export default productsReducer;
