import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import Body from "../components/layouts/body";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="bg-slate-500"
        //  className="bg-[url('https://cdn.wallpapersafari.com/91/24/EzfZxa.jpg')]"
      >
        <Header />
        <Body />
        <Footer />
      </main>
    </>
  );
};

export default Home;
