import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Testimonies from "./components/Testimonies";
import Tech from "./components/Tech";
import Socials from "./components/Socials";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <Navigation onChangeTheme={handleThemeToggle} />
      <Home />
      <Services />
      <Project />
      <Tech />
      <Testimonies />
      <Contact />
      <Socials />
      <svg
        data-aos="fade-left"
        className="up"
        onClick={scrollToTop}
        fill="#000000"
        width="30px"
        height="30px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M10.157 9.95L8.036 7.828 5.914 9.95 4.5 8.536 8.036 5l3.535 3.536-1.414 1.414zM0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm2 0c0 3.307 2.686 6 6 6 3.307 0 6-2.686 6-6 0-3.307-2.686-6-6-6-3.307 0-6 2.686-6 6z"
            fill-rule="evenodd"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default App;
