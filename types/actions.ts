import { NonFeaturedProduct, Product } from "./product";

type UpdateProductsAction = {
  type: "UPDATE_PRODUCTS";
  data: NonFeaturedProduct[];
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
  | UpdateProductsAction;
