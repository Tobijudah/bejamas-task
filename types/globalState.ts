import { NonFeaturedProduct, Product } from "./product";

export type GlobalState = {
  cart: Product[];
  products: NonFeaturedProduct[];
};
