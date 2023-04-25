import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import React from "react";
import Tech from "./components/Tech";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Project />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
