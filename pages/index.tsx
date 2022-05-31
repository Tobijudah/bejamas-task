import React from "react";
import data from "../data";
import { NextPage } from "next";
import Home from "../views/Home/Home";
import { HomeProps } from "../views/Home/Home.types";
import { FeaturedProduct, NonFeaturedProduct } from "../types/product";

export const getServerSideProps = async () => {
  // simulate fetching data from a database
  const response = data;

  // get products (non-featured)
  const products = response.products.filter((product): product is NonFeaturedProduct => product.featured === false);

  // get featured product
  const featuredProduct = response.products.find((product) => product.featured === true) as FeaturedProduct;

  return {
    props: { featuredProduct, products },
  };
};

const Index: NextPage<HomeProps> = (props) => {
  return <Home {...props} />;
};

export default Index;
