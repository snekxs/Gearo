import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

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
    if (key === "hello") {
      console.log("IT WORKS!")
    }
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
