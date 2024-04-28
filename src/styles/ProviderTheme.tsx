import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { DarkModeContext } from "../contexts/darkMode";

interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  const [darkMode, setDarkMode] = React.useState<PaletteMode>("dark");

  const toggleTheme = () => {
    setDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode,
        },
        direction: "rtl",
        components: {
          MuiTextField: {
            defaultProps: {
              sx: {
                // backgroundColor: darkMode === "dark" ? "#1e1e1e" : "#ffffff",
              },
            },
          },
        },
      }),
    [darkMode]
  );
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <DarkModeContext.Provider
        value={{ mode: darkMode, toggleMode: toggleTheme }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              height: "100vh",
              width: "100vw",
              maxWidth: "100%",
            }}
          >
            {props.children}
          </div>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </CacheProvider>
  );
}

export default ProviderTheme;
