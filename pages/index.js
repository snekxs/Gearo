import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import Header from "./components/Header";
import * as React from "react";
import HomePageContent from "./components/HomePageContent";
import ThemeChanger from "./components/ThemeChanger";

// Theme is forced, we shouldn't allow user to change the theme

const maintenance = true;

// Theme is forced, we shouldn't allow user to change the theme

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  if (maintenance) {
    return (
      <>
        <div className="maintenance">
          <h1>Be Right Back.</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Gearo</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <HomePageContent />
      </>
    );
  }
}
