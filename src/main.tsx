import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/esri/themes/dark/main.css";
import "./i18n.ts";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <ToastContainer position="bottom-right" />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </React.Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);
