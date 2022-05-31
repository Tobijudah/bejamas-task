import { NonFeaturedProduct, Product } from "./product";

export type GlobalState = {
  cart: Product[];
  cartModal: boolean;
  products: NonFeaturedProduct[];
  filteredProducts: NonFeaturedProduct[];
};
