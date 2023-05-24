import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Testimonies from "./components/Testimonies";
import Tech from "./components/Tech";
import "./App.css";
import Socials from "./components/Socials";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg-color", "#121212");
      root.style.setProperty(
        "--bg-box-shadow",
        "rgba(255, 255, 255, 0.1) 0px 0px 10px 0px"
      );
      root.style.setProperty("--font-color", "#f2f2f2");
      root.style.setProperty("--btn-color", "#444444");
      root.style.setProperty("--btn-hover-color", "#666666");
    } else {
      root.style.setProperty("--bg-color", "#f2f2f2");
      root.style.setProperty(
        "--bg-box-shadow",
        "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px"
      );
      root.style.setProperty("--font-color", "#333333");
      root.style.setProperty("--btn-color", "#f2f2f2");
      root.style.setProperty("--btn-hover-color", "#e6e6e6");
    }
  }, [theme]);

  function handleThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="App">
      <Navigation onChangeTheme={handleThemeToggle} />
      <Home />
      <Project />
      <Tech />
      <Testimonies />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
