import { Category, NonFeaturedProduct, Product } from "./product";

type SetProductsAction = {
  type: "SET_PRODUCTS";
  data: NonFeaturedProduct[];
};

type FilterProductsByCategoriesAction = {
  type: "FILTER_PRODUCTS_BY_CATEGORIES";
  data: {
    categories: Category[];
    products: NonFeaturedProduct[];
  };
};

type SortProductsAlphabeticallyAction = {
  type: "SORT_PRODUCTS_ALPHABETICALLY";
  order: "asc" | "desc";
};

type SortProductsByPriceAction = {
  type: "SORT_PRODUCTS_BY_PRICE";
  order: "asc" | "desc";
};

type OpenCartModalAction = {
  type: "OPEN_CART_MODAL";
};

type CloseCartModalAction = {
  type: "CLOSE_CART_MODAL";
};

type AddToCartAction = {
  type: "ADD_TO_CART";
  data: Product;
};

type RemoveFromCartAction = {
  type: "REMOVE_FROM_CART";
  data: number;
};

type ClearCartAction = {
  type: "CLEAR_CART";
};

export type ReducerActions =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction
  | OpenCartModalAction
  | CloseCartModalAction
  | SortProductsAlphabeticallyAction
  | SortProductsByPriceAction
  | FilterProductsByCategoriesAction
  | SetProductsAction;
