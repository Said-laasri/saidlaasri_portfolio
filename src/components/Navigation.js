import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonTheme from "./UI/ButtonTheme";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const { onChangeTheme } = props;
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Navbar
      data-aos="fade-down"
      style={{ zIndex: "9999999" }}
      className={classes.nav}
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home" className={classes.brand}>
        Said Laasri
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className={classes.links}>
        <Nav className={classes.navLinks}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="#tech">Skills</Nav.Link>
          <Nav.Link href="#testemony">Testimonies</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#about">Socials</Nav.Link>
          <Nav.Link href="#resume">
            <ButtonTheme onChangeTheme={onChangeTheme} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
