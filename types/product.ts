type Image = {
  alt: string;
  src: string;
};

export type Category = "people" | "premium" | "food" | "pets" | "landmarks" | "cities" | "nature";

type BaseProduct = {
  id: number;
  name: string;
  image: Image;
  price: number;
  category: Category;
  currency: {
    name: string;
    symbol: string;
  };
  bestseller: boolean;
};

export type NonFeaturedProduct = BaseProduct & {
  details: null;
  featured: false;
};

export type FeaturedProduct = BaseProduct & {
  featured: true;
  details: {
    size: number;
    description: string;
    recommendations: Image[];
    dimensions: {
      width: number;
      height: number;
    };
  };
};

export type Product = NonFeaturedProduct | FeaturedProduct;
