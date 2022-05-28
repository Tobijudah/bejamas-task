import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bejamas</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
