import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ScoreBook from "./pages/ScoreBook";
import News from "./pages/News";
import Navbar2 from "./components/Navbar2";
import HeroSection from "./components/HeroSection";
const App = function () {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Navbar2/> */}
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
    <App />
  </StrictMode>
);
