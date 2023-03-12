import { createClient } from "@supabase/supabase-js";
import * as React from "react";

import { supabase } from "@/components/helpers/Supabase";
export default async function handler(req, res) {
  const {
    query: { name },
  } = req;

  if (req.method === "GET") {
    await supabase
      .from("users")
      .select("*")
      .eq("name", name)
      .then((response) => {
        console.log("response", response);

        if (response.data.length === 0) {
          res.status(404).json({ message: "User not found" });
        } else {
          res.status(200).json(response.data);
        }
      })
      .catch((error) => {
        console.log("error", error);

      });
  } else {
    res.status(405).json(submit);




  }
}
