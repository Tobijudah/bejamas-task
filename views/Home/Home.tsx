import Head from "next/head";
import React, { useEffect } from "react";
import { HomeProps } from "./Home.types";
import useStore from "../../hooks/useStore";
import Header from "../../components/Header/Header";
import { HomeDivider, HomeWrapper } from "./Home.styles";
import Featured from "../../components/Featured/Featured";
import ProductList from "../../components/ProductList/ProductList";

const Home: React.FC<HomeProps> = ({ featuredProduct, products }) => {
  const { state, dispatch } = useStore();
  const categories = products.map((product) => product.category).filter((value, index, self) => self.indexOf(value) === index);

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", data: products });
  }, []);

  return (
    <>
      <Header />
      <HomeWrapper>
        <Head>
          <title>Bejamas</title>
        </Head>
        <Featured {...featuredProduct} />
        <HomeDivider />
        <ProductList categories={categories} products={state.filteredProducts} />
      </HomeWrapper>
    </>
  );
};

export default Home;
