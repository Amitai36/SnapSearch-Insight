import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
        direction: "rtl",
      }),
    []
  );
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100vh", width: "100vw", maxWidth: "100%" }}>
          {props.children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ProviderTheme;
