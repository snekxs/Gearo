import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import * as React from "react";
import HomePageContent from "./components/HomePageContent";
import ThemeChanger from "./components/ThemeChanger";
import Maintenance from "@/pages/components/Maintenance";
import { useState } from "react";

const supabaseUrl = "https://ridzyuyhihrriayeweqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHp5dXloaWhycmlheWV3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTI5NTUsImV4cCI6MTk5MDQ2ODk1NX0.dNloclNcqXm6V_w1TJ19RV3PXRSjOY03DXNfdFVhfRU";
const supabase = createClient(supabaseUrl, supabaseKey);


const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [maintenance, setMaintenance] = useState(true);
  const [data, setData] = useState([])

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
