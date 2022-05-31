import { Product } from "./types/product";

const data: { products: Product[] } = {
  products: [
    {
      id: 1,
      name: "Red Bench",
      category: "people",
      price: 3.89,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
        alt: "",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 2,
      name: "Egg Balloon",
      category: "food",
      price: 93.89,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 3,
      name: "Man",
      category: "people",
      price: 100,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 4,
      name: "Architecture",
      category: "landmarks",
      price: 101,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
        alt: "",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 5,
      name: "Samurai King Restling",
      category: "landmarks",
      price: 101,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
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
            src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            alt: "",
          },
          {
            src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            alt: "",
          },
          {
            src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            alt: "",
          },
        ],
      },
    },
  ],
};

export default data;
