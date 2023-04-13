import Head from "next/head";
import { Button } from "@mui/material";
import * as React from "react";
import { createClient } from "@supabase/supabase-js";
import AdminHeader from "@/components/AdminHeader";
import TemporaryDrawer from "@/components/TemporaryDrawer";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { supabase } from "@/components/helpers/Supabase";
import { StatusPage, StatusPageConfig } from "react-healthy";
import Collapsible from "react-collapsible";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/router";

export default function Admin() {
  const [checked, setChecked] = useState(true);
  const [logged, setLogged] = useState();
  useEffect(() => {
    fetch("api/config")
      .then((response) => response.json())
      .then((data) => {
        const mode = data[0].maintenance;
        if (mode === true) {
          setChecked(!true);
        } else {
          setChecked(!false);
        }
      });
  }, []);

  useEffect(() => {
    const logged = sessionStorage.getItem("logged");
    if (logged) {
      setLogged(true);
    }
  }, []);

  const handleChange = async () => {
    setChecked(!checked);
    if (checked === true) {
      await supabase
        .from("maintenance")
        .update({ maintenance: "true" })
        .eq("maintenance", "false");
    } else {
      await supabase
        .from("maintenance")
        .update({ maintenance: "false" })
        .eq("maintenance", "true");
    }
  };

  const textChange = () => {
    if (checked === true) {
      return "On";
    } else {
      return "Off";
    }
  };

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
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    supabase
      .from("adminpasswords")
      .select("password")
      .then((response) => {
        const data = response.data;

        if (user === "admin" && data.some((item) => item.password === pass)) {
          sessionStorage.setItem("logged", "true");
          setLogged(true);
        } else {
          toast.error("Invalid Credentials");
        }
      });
  };

  if (logged) {
    return (
      <>
        <div>
          <Toaster position="bottom-center" />
        </div>
        <AdminHeader />
        <div className="adminMain">
          <h1>Welcome.</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Toaster containerClassName="toast" position="bottom-right" />
        </div>
        <div className="AdminLogin">
          <h1>Admin Login</h1>
          <input id="username" placeholder="Username" />
          <input
            id="password"
            className="adminpassword"
            placeholder="Password"
          />
          <h1 className="adminclick" onClick={handleLogin}>
            Login
          </h1>
        </div>
      </>
    );
  }
}
