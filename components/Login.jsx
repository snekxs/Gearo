import { Button } from "@mui/material";
import * as React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Formik, Field, Form } from "formik";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createClient } from "@supabase/supabase-js";
import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-react";
const supabaseUrl = "https://ridzyuyhihrriayeweqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHp5dXloaWhycmlheWV3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTI5NTUsImV4cCI6MTk5MDQ2ODk1NX0.dNloclNcqXm6V_w1TJ19RV3PXRSjOY03DXNfdFVhfRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseRegister = () => setOpenRegister(false);
  const handleCloseLogin = () => setOpenLogin(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 350,
    bgcolor: "background.paper",
    color: "black",
    borderRadius: 5,
    p: 4,
  };
  const buttonSX = {
    bgcolor: "#2962ff",
    color: "white",
    "&:hover": {
      bgcolor: "#82b1ff",
    },
  };

  const Login = () => {
    handleCloseMenu();
    handleOpenLogin();
  };

  const Register = () => {
    handleCloseMenu();
    handleOpenRegister();
  };

  const submitRegister = () => { };

  const submitLogin = () => { };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        color="inherit"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={Login}>Login</MenuItem>
        <MenuItem onClick={Register}>Register</MenuItem>
      </Menu>
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="loginform">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={() => {
                submitRegister(values);
              }}
            >
              <Form>
                <h1>Register</h1>
                <label className="fieldtext">Email</label>
                <Field
                  className="field"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label className="fieldtext">Password</label>
                <Field
                  className="field"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <Button className="submit" sx={buttonSX} type="submit">
                  Register
                </Button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="loginform">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={() => {
                submitLogin();
              }}
            >
              <Form>
                <h1>Login</h1>
                <label className="fieldtext">Email</label>
                <Field
                  className="field"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label className="fieldtext">Password</label>
                <Field
                  className="field"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <Button className="submit" sx={buttonSX} type="submit">
                  Login
                </Button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
    </>
  );
}
