import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import ArrowDown from "./UI/Arrowdown";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container id="home">
      <Row data-aos="fade-right">
        <Col>
          <h1 className={`section text-center mt-4 p-2 ${classes.text}`}>
            About me:
          </h1>
        </Col>
      </Row>

      <Row className="">
        <Col className={classes.me} data-aos="fade-right">
          Hi! I'm Said Laasri, a highly motivated full-stack developer. My
          enthusiasm for web development knows no bounds, and I am constantly
          driven to seek out fresh challenges and embrace new technologies.
          Currently, I am actively exploring exciting opportunities on my
          job-hunting journey. If you happen to come across any intriguing
          prospects, I would greatly appreciate it if you could reach out to me.
          Let's connect and embark on a rewarding journey together!
        </Col>
        <Col className={classes.mestck} data-aos="fade-right">
          <Col>
            <Badge bg="success">FrontEnd</Badge>
          </Col>

          <Col>
            <Badge bg="info">+</Badge>
          </Col>

          <Col>
            <Badge bg="success">BackEnd</Badge>
          </Col>

          <Col>
            <Badge bg="info">=</Badge>
          </Col>

          <Col>
            <Badge bg="success">Full-stack</Badge>
          </Col>
        </Col>
      </Row>
      <Row data-aos="fade-down">
        <Col className="mt-5">
          <a
            className="mb-4 btn btn-outline-dark"
            href="https://docs.google.com/document/d/1CN-RO_emYm2Vq_cpWOMMfEM951NZSxcTY7N9L9LVpoc/export?format=pdf"
            download="Said_Laasri_Resume.pdf"
          >
            My Resume
            <ArrowDown />
          </a>

          <hr />
          <span>Or</span>
          <hr />
          <button
            variant="outline-dark"
            class="mb-4 btn btn-outline-dark"
            size="lg"
            type="submit"
          >
            <Nav.Link href="#contact"> Want to Connect?</Nav.Link>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
