// ThemeContext.js
import React from "react";
import { DarkModeContext } from "../contexts/darkMode";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkMode = () => {
  const { mode, toggleMode } = React.useContext(DarkModeContext);

  return (
    <Button variant="contained" onClick={toggleMode}>
      {mode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
    </Button>
  );
};
export default DarkMode;
