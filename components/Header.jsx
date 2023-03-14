import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "next-themes";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeChanger from "./ThemeChanger";
import ProductAdder from "./ProductAdder";
import Login from "./Login";
const ref = React.createRef();

import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //todo fix darkMode local storage

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
          <h1 className="title">Gearo</h1>
          <Typography
            className="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >

          </Typography>

          <Login />
          <ProductAdder />
          <ThemeChanger />
        </Toolbar>
      </AppBar>
    </Box >
  );
}
