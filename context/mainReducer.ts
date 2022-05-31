import { CartReducer, MainReducer, ProductsReducer } from "../types/reducers";

const cartReducer: CartReducer = (state, { type, data }) => {
  switch (type) {
    case "ADD_TO_CART": {
      return [...state, data];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((product) => product.id !== data);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
};

const productsReducer: ProductsReducer = (state, { type, data }) => {
  switch (type) {
    case "UPDATE_PRODUCTS": {
      return data;
    }
    default:
      return state;
  }
};

const mainReducer: MainReducer = ({ cart, products }, action) => ({
  cart: cartReducer(cart, action),
  products: productsReducer(products, action),
});

export default mainReducer;
