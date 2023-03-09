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


const inter = Inter({ subsets: ["latin"] });
export default function Home() {

  const [config, setConfig] = useState()
  const [maintenanceMode, setMaintenance] = useState();
  useEffect(() => {
    fetch("api/config")
      .then((response) => response.json())
      .then((data) => {
        setMaintenance(data[0].maintenance);
      });
  }, []);






  if (maintenanceMode) {
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
