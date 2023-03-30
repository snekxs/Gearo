import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Head from "next/head";
import Maintenance from "@/components/Maintenance";

export default function Product() {
  const [maintenanceMode, setMaintenanceMode] = useState();
  useEffect(() => {
    const access = sessionStorage.getItem("access");
    if (access) {
      setMaintenanceMode(false);
    } else {
      const fetchData = async () => {
        const res = await fetch(`/api/config`);
        const data = await res.json();
        setMaintenanceMode(data[0].maintenance);
      };
      fetchData();
    }
  }, []);

  if (maintenanceMode) {
    return (
      <>
        <Head>
          <title>Gearo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Maintenance />
      </>
    );
  } else {
    return (
      <>
        <Header />
        //TODO
      </>
    );
  }
}
