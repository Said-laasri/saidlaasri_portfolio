import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ArrowDown from "./UI/Arrowdown";
import classes from "./Home.module.css";

const Home = () => {
  const resumeLink =
    "https://docs.google.com/document/d/1CN-RO_emYm2Vq_cpWOMMfEM951NZSxcTY7N9L9LVpoc/export?format=pdf";

  return (
    <Container id="home">
      <Row>
        <Col>
          <h1 className="section text-center mt-4 p-2">Portfolio</h1>
        </Col>
      </Row>

      <Row className="">
        <Col className={classes.me}>
          Hi! I'm Said Laasri, a highly motivated full-stack developer.
          My enthusiasm for web development knows no bounds, and I am constantly
          driven to seek out fresh challenges and embrace new technologies.
          Currently, I am actively exploring exciting opportunities on my
          job-hunting journey. If you happen to come across any intriguing
          prospects, I would greatly appreciate it if you could reach out to me.
          Let's connect and embark on a rewarding journey together!
        </Col>
        <Col className={classes.mestck}>
          <Col>
            <Badge bg="secondary">FrontEnd</Badge>
          </Col>

          <Col>
            <Badge bg="secondary">+</Badge>
          </Col>

          <Col>
            <Badge bg="secondary">BackEnd</Badge>
          </Col>

          <Col>
            <Badge bg="secondary">=</Badge>
          </Col>

          <Col>
            <Badge bg="secondary">Full-stack</Badge>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Button
            variant="outline-dark"
            className="mb-4"
            size="lg"
            href={resumeLink}
            download="Said_Laasri_Resume.pdf"
          >
            My Resume
            <ArrowDown />
          </Button>
          <hr />
          <span>Or</span>
          <hr />
          <Button
            variant="outline-dark"
            className="mb-4"
            size="lg"
            type="submit"
          >
            <Nav.Link href="#contact"> Want to Connect?</Nav.Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
