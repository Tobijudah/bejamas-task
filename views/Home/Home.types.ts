import { FeaturedProduct, NonFeaturedProduct } from "../../types/product";

export type HomeProps = {
  products: NonFeaturedProduct[];
  featuredProduct: FeaturedProduct;
};
