import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global, ThemeProvider } from "@emotion/react";
import { Theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle}/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
