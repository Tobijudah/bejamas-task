import React from "react";
import Head from "next/head";
import data from "../../data";
import Header from "../../components/Header/Header";
import { NonFeaturedProduct } from "../../types/types";
import { HomeDivider, HomeWrapper } from "./Home.styles";
import Featured from "../../components/Featured/Featured";
import ProductList from "../../components/ProductList/ProductList";

const Home: React.FC = () => {
  const newData = data.products.filter((product): product is NonFeaturedProduct => product.featured === false);
  return (
    <HomeWrapper>
      <Head>
        <title>Bejamas</title>
      </Head>
      <Header />
      <Featured
        price={1000}
        category="Food"
        bestseller={false}
        name="Samurai King Resting"
        image={{
          alt: "image",
          src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
        }}
        details={{
          size: 1024,
          dimensions: {
            width: 100,
            height: 100,
          },
          description:
            "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.",
          recommendations: [
            {
              alt: "image",
              src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            },
            {
              alt: "image",
              src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            },
            {
              alt: "image",
              src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=10",
            },
          ],
        }}
      />
      <HomeDivider />
      <ProductList products={newData} />
    </HomeWrapper>
  );
};

export default Home;
