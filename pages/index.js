import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/Header";
import * as React from "react";
import HomePageContent from "@/components/HomePageContent"
import ThemeChanger from "@/components/ThemeChanger";
import Maintenance from "@/components/Maintenance";
import { useState, useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });
export default function Home({ data }) {
  const [config, setConfig] = useState()
  const [maintenanceMode, setMaintenanceMode] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/config`)
      const data = await res.json();
      setMaintenanceMode(data[0].maintenance)
    }
    fetchData();
  }, [])


  if (maintenanceMode == true) {
    return (
      <>
        <Head>
          <title>Gearo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Maintenance />
      </>
    )
  }
  else if (maintenanceMode == false) {
    return <>
      <Head>
        <title>Gearo</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePageContent />
    </>
  }

  // Initial value of state, did not get response from server
  return <>
    <Head>
      <title>Gearo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
}
