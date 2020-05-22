import { ADD_TO_CART, ADD_PRODUCT, GET_PRODUCT} from "../constants/ActionTypes";
import data from "../api/data.json"

const initState = {
  products: []
}
const products = (state = data, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT:
      console.log(action)
      return {
        ...state,
        products: action.products,
      }
    case ADD_TO_CART:
      return state.map(product => {
        if (product["id"] === action.cartProducts["id"]) {
          return {
            ...product,
            inventory: action.cartProducts["inventory"] - 1
          };
        }
        return product;
      });
    case ADD_PRODUCT:
      if (state.some(product => product["id"] === action.product.id)) {
        return state.products.map(product => {
          if (
            product.title === action.product.title &&
            product.price === action.product.price
          ) {
            return {
              ...product,
              inventory: product.inventory + 1
            };
          }
          return product;
        });
      } else {
        return [
          ...state,
          { ...action.product, id: state["length"] + 1 }
        ];
      }
    default:
      return state;
  }
};

export const getProducts = state => state.products;

export default products;
