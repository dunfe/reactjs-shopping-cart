import {ADD_PRODUCT, GET_PRODUCT} from "../constants/ActionTypes";

function productsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.products
      }
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
