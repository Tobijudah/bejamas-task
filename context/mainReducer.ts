import { CartModalReducer, CartReducer, FilteredProductsReducer, MainReducer, ProductsReducer } from "../types/reducers";

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
    case "SET_PRODUCTS": {
      return action.data;
    }
    case "SORT_PRODUCTS_ALPHABETICALLY": {
      return [
        ...state.sort((a, b) => {
          if (action.order === "asc") {
            return a.name.localeCompare(b.name);
          }
          return b.name.localeCompare(a.name);
        }),
      ];
    }
    case "SORT_PRODUCTS_BY_PRICE": {
      return [
        ...state.sort((a, b) => {
          if (action.order === "asc") {
            return a.price - b.price;
          }
          return b.price - a.price;
        }),
      ];
    }
    default:
      return state;
  }
};

const filteredProductsReducer: FilteredProductsReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS_BY_CATEGORIES": {
      return action.data.categories.length > 0
        ? action.data.products.filter((product) => {
            return action.data.categories.some((category) => product.category === category);
          })
        : action.data.products;
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

const mainReducer: MainReducer = ({ cart, products, cartModal, filteredProducts }, action) => ({
  cart: cartReducer(cart, action),
  products: productsReducer(products, action),
  cartModal: cartModalReducer(cartModal, action),
  filteredProducts: filteredProductsReducer(filteredProducts, action),
});

export default mainReducer;
