import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const ref = React.createRef();

import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function darkModeToggle() {
    let element = document.body;
    let header = ref.current;
    element.classList.toggle("dark");
    header.classList.toggle("headerdark");

    setIsClicked((isClicked) => !isClicked);
    localStorage.setItem("darkMode", !isClicked);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar ref={ref} className={"header"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Gearo
          </Typography>
          <Button color="inherit">Login</Button>
          <Button
            className="dark-mode-btn"
            color="inherit"
            onClick={darkModeToggle}
          >
            {isClicked ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
