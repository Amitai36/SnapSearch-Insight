import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { ReactNode } from "react";

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
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "100vh", width: "100vw" }}>{props.children}</div>
    </ThemeProvider>
  );
}

export default ProviderTheme;
