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
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import DnsIcon from "@mui/icons-material/Dns";
import GroupIcon from "@mui/icons-material/Group";
import ProductAdder from "./ProductAdder";
import Link from "next/link";

import Login from "./Login";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const ref = React.createRef();

import { useEffect, useState } from "react";

export default function AdminHeader() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const icons = [
    <GroupIcon key="group" />,
    <InventoryIcon key="inventory" />,
    <SettingsIcon key="settings" />,
    <DnsIcon key="dns" />,
  ];

  const links = [
    "/admin/users",
    "/admin/products",
    "/admin/settings",
    "/admin/server-status",
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Users", "Products", "Site Settings", "Server Status"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <Link
                href={links[index]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar ref={ref} className={"header"}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <h1 className="title">Admin</h1>
          <Typography
            className="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <ThemeChanger />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
