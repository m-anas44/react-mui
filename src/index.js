import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ScoreBook from "./pages/ScoreBook";
import News from "./pages/News";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/appTheme";
import { CssBaseline } from "@mui/material";
const App = function () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/scoreBook" Component={ScoreBook} />
        <Route path="/news" Component={News} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
