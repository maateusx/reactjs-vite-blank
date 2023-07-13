import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";

import MaterialTheme from "./style/material";
import Theme from "./style/theme";

import Routes from "./routes";
import Store from "./store";

import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Store>
      <Router>
        <MuiThemeProvider theme={MaterialTheme}>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <ToastContainer autoClose={3000} position="top-right" />
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </Router>
    </Store>
  </React.StrictMode>,
);
