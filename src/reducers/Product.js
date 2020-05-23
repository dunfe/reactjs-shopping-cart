import {ADD_PRODUCT, ADD_TO_CART, GET_PRODUCT, SYNC_PRODUCT, REMOVE_PRODUCT} from "../action";

function productsReducer(state = [], action = {}) {
  switch (action.type) {
    case SYNC_PRODUCT:
    case GET_PRODUCT:
      return {
        ...state,
        products: action.products
      }
    case ADD_TO_CART:
      return {
        ...state
      }
    case ADD_PRODUCT:
      return {
        ...state
      }
      case REMOVE_PRODUCT:
        return {
          ...state
        }
    default:
      return state;
  }
}

export const getProducts = state => state.products.products;

export default productsReducer;
