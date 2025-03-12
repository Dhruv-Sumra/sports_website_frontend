import React from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import News from "./pages/News";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Home />
      <Categories />
      <Players/>
      <News/>
      <About/>
    </Router>
  );
};

export default App;
