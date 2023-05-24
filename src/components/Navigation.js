import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BUttonTheme from "./UI/ButtonTheme";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const { onChangeTheme } = props;
  return (
    <Navbar
      style={{ zIndex: "9999999" }}
      className={classes.nav}
      collapseOnSelect
      expand="lg"
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
            <BUttonTheme onChangeTheme={onChangeTheme} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
