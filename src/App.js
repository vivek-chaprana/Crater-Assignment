import React from "react";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
};

export default App;
