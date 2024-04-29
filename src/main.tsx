import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HotkeysProvider } from "react-hotkeys-hook";
import "./assets/esri/themes/dark/main.css";
import "./i18n.ts";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <HotkeysProvider initiallyActiveScopes={["settings"]}>
        <React.Suspense fallback="loading">
          <ToastContainer theme="light" position="bottom-right" />
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </React.Suspense>
      </HotkeysProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
