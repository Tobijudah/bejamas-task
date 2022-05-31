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
        <ProductList products={state.products} />
      </HomeWrapper>
    </>
  );
};

export default Home;
