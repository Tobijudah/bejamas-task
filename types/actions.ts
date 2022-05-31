import { NonFeaturedProduct, Product } from "./product";

type UpdateProductsAction = {
  type: "UPDATE_PRODUCTS";
  data: NonFeaturedProduct[];
};

type AddToCartAction = {
  type: "ADD_TO_CART";
  data: Product;
};

type ClearCartAction = {
  type: "CLEAR_CART";
  data?: never;
};

export type ReducerActions = AddToCartAction | ClearCartAction | UpdateProductsAction;
