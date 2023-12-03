import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./styles.css";
import { theme } from "./theme/theme";
import MainPage from "./components/pages/main-page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>
);
