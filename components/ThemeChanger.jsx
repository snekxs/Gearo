import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { LightMode } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Button from "@mui/material/Button";

export default function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
    setIsClicked((isClicked) => !isClicked);
  };

  const text = () => {
    if (theme === "dark") {
      return <LightMode />;
    } else {
      return <DarkModeIcon />;
    }
  };

  return (
    <div>
      <Button color="inherit" onClick={changeTheme}>
        {text()}
      </Button>
    </div>
  );
}
