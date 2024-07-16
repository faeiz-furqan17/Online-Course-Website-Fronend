import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";

//Creating Theme For MUI
export const CustomTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00c853",
      dark: "#00e676",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c6ff00",
      dark: "#c6ff00",
      light: "#c6ff00",
    },
    info: {
      main: "#b1c0cb",
    },
    divider: "#004d40",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={CustomTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
