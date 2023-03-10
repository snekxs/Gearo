import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import * as React from "react";
import HomePageContent from "./components/HomePageContent";
import ThemeChanger from "./components/ThemeChanger";
import Maintenance from "@/pages/components/Maintenance";
import { useState, useEffect } from "react";


export async function getServerSideProps(context) {
  const { req } = context;
  let host = req.headers.host

  const res = await fetch(`http://${host}/api/config`)
  const data = await res.json();

  return {
    props: {
      data: data
    }
  }
}


const inter = Inter({ subsets: ["latin"] });
export default function Home({ data }) {
  const [config, setConfig] = useState()
  let maintenanceMode = data[0].maintenance


  if (maintenanceMode) {
    return (
      <>
        <Head>
          <title>Gearo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Maintenance />
      </>)
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
