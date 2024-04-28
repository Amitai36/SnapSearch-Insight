import React from "react";

export const DarkModeContext = React.createContext<{
  mode: "dark" | "light";
  toggleMode: () => void;
}>({ mode: "light", toggleMode() {} });


