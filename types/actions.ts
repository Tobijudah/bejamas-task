import { NonFeaturedProduct, Product } from "./product";

type UpdateProductsAction = {
  type: "UPDATE_PRODUCTS";
  data: NonFeaturedProduct[];
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
  data?: never;
};

export type ReducerActions = AddToCartAction | RemoveFromCartAction | ClearCartAction | UpdateProductsAction;
