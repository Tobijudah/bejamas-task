type Image = {
  alt: string;
  src: string;
};

type BaseProduct = {
  name: string;
  image: Image;
  price: number;
  category: string;
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
