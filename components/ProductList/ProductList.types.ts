import { Category, NonFeaturedProduct } from "../../types/product";

export type ProductListProps = {
  categories: Category[];
  products: NonFeaturedProduct[];
};
