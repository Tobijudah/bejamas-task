import { CartModalReducer, CartReducer, MainReducer, ProductsReducer } from "../types/reducers";

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.data];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((product) => product.id !== action.data);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
};

const productsReducer: ProductsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS": {
      return action.data;
    }
    default:
      return state;
  }
};

const cartModalReducer: CartModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_CART_MODAL": {
      return true;
    }
    case "CLOSE_CART_MODAL": {
      return false;
    }
    default:
      return state;
  }
};

const mainReducer: MainReducer = ({ cart, products, cartModal }, action) => ({
  cart: cartReducer(cart, action),
  products: productsReducer(products, action),
  cartModal: cartModalReducer(cartModal, action),
});

export default mainReducer;
