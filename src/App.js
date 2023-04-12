import "./App.css";
import Navigation from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import React from "react";
import Tech from "./component/Tech";

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
