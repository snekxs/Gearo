import { createClient } from "@supabase/supabase-js";
import * as React from "react";
import Supabase from "@/pages/helpers/Supabase";


export default async function handler(req, res) {
  const {
    query: { name },
  } = req;

  if (req.method === "GET") {
    await Supabase()
      .from("users")
      .select("*")
      .eq("name", name)
      .then((response) => {
        console.log("response", response);

        if (response.data.length === 0) {
          res.status(404).json({ message: "User not found" });
        } else {
          const mouse = response.data[0].mouse;
          res.send(mouse);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  } else {
    res.status(405).json(submit);
  }
}
