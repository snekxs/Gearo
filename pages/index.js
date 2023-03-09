import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import Header from "./components/Header";
import * as React from "react";
import HomePageContent from "./components/HomePageContent";
import ThemeChanger from "./components/ThemeChanger";
import Maintenance from "@/pages/components/Maintenance";
import { useState } from "react";




const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [maintenance, setMaintenance] = useState(true);
  if (maintenance) {
    return <Maintenance />;
  }
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
