import Head from "next/head";
import Header from "./components/Header";
import { Button } from "@mui/material";
import * as React from 'react';
import { createClient } from "@supabase/supabase-js";

import { useState, useEffect } from "react";
import Supabase from "../helpers/Supabase";
import { StatusPage, StatusPageConfig } from "react-healthy";
import Collapsible from 'react-collapsible';
import Switch from '@mui/material/Switch';


export default function Admin() {
  const [checked, setChecked] = useState(true);
  const [logged, setLogged] = useState();
  useEffect(() => {
    fetch("api/config")
      .then((response) => response.json())
      .then((data) => {
        const mode = (data[0].maintenance);
        if (mode === true) {
          setChecked(!true)
        } else {
          setChecked(!false)
        }
      });
  }, []);

  const handleChange = async () => {

    setChecked(!checked)
    if (checked === true) {
      await Supabase().from("maintenance").update({ maintenance: 'true' }).eq('maintenance', "false")
    } else {
      await Supabase().from("maintenance").update({ maintenance: 'false' }).eq('maintenance', "true")
    }
  };

  const textChange = () => {
    if (checked === true) {
      return "On"
    } else {
      return "Off"
    }
  }


  const statusPageConfig = {
    apis: [
      {
        name: "User API",
        endpoint: "/api/users",
      },
      {
        name: "Product API",
        endpoint: "/api/products",
      },
    ],
  };


  const handleLogin = () => {
    const user = document.getElementById("username").value
    const pass = document.getElementById('password').value

    Supabase().from("adminpasswords").select("password").then((response) => {

      const data = response.data

      if (user === "admin" && data.some(item => item.password === pass)) {
        setLogged(true)
      } else {
        alert("Invalid Credentials")
      }
    })



  }




  if (logged) {
    return (
      <>
        <Head>
          <title>Admin</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Collapsible trigger={"API Status"}>
          <div className="status">
            <StatusPage config={statusPageConfig} />
          </div>
        </Collapsible>
        <Collapsible trigger={"Maintenance Mode"}>
          <div className="toggleMaintenance">
            <div>Turn {textChange()} Maintenance Mode</div>
            <Switch checked={!checked} onChange={handleChange} defaultChecked />

          </div>
        </Collapsible>
      </>
    );
  } else {
    return (
      <>
        <div className="AdminLogin">
          <h1>Admin Login</h1>
          <input id="username" placeholder="Username" />
          <input id="password" className="adminpassword" placeholder="Password" />
          <h1 className="adminclick" onClick={handleLogin}>Login</h1>
        </div>
      </>
    )
  }



}
