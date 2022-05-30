import { Product } from "./types/types";

const data: { products: Product[] } = {
  products: [
    {
      name: "Red Bench",
      category: "people",
      price: 3.89,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "",
        alt: "",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      name: "Egg Balloon",
      category: "food",
      price: 93.89,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Man",
      category: "people",
      price: 100,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Architecture",
      category: "landmarks",
      price: 101,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Samurai King Restling",
      category: "landmarks",
      price: 101,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "",
        alt: "",
      },
      bestseller: false,
      featured: true,
      details: {
        dimensions: {
          width: 1020,
          height: 1020,
        },
        size: 15000,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
        recommendations: [
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
        ],
      },
    },
  ],
};

export default data;
