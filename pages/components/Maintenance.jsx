import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://ridzyuyhihrriayeweqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHp5dXloaWhycmlheWV3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTI5NTUsImV4cCI6MTk5MDQ2ODk1NX0.dNloclNcqXm6V_w1TJ19RV3PXRSjOY03DXNfdFVhfRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Maintenance() {
  const [reveal, setReveal] = useState(false);
  const [text, setText] = useState(true);

  const showText = () => {
    setText((text) => !text);
  };
  const clickEvent = () => {
    showText();
    setReveal((reveal) => !reveal);
  };

  const submit = () => {
    const key = document.getElementById("submit").value
    supabase.from("adminpasswords").select("password").then((response) => {

      const data = response.data

      if (data.some(item => item.password === key)) {
        console.log("Valid")
      } else {
        alert("Invalid Credentials")
      }
    })
  };

  const back = () => {
    setText((text) => !text)
    setReveal((reveal) => !reveal)
  }

  return (
    <div className="maintenance">
      {text && <h1 onClick={clickEvent}>Be Right Back.</h1>}
      {reveal && (
        <div className={"accessform"}>
          <input id="submit" className="accessInput" placeholder={"Access Key"} />
          <Button onClick={back} color={"inherit"} sx={{ fontSize: 20 }}>
            Back
          </Button>

          <Button onClick={submit} color={"inherit"} sx={{ fontSize: 20 }}>
            Enter
          </Button>

        </div>
      )}
    </div>
  );
}
