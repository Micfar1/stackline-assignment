import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import styled, { ThemeProvider } from "styled-components";
import "./styles.css";
import { theme } from "./theme/theme";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Wrapper>React-APP!</Wrapper>
    </ThemeProvider>
  </React.StrictMode>
);
