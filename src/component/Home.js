import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Arrowdown from "./UI/Arrowdown";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container className={classes.home}>
      <Row>
        <Col className={classes.title}>
          <h1 className={classes.title}>Portfolio</h1>
        </Col>
      </Row>

      <Row className="">
        <Col className={classes.me}>
          Hi! My Name is Said Laasri, i'm a full-stack developer. Pationate
          about web development, i'm always looking for new challenges and new
          technologies to learn. I'm currently Job Hunting, so if you have any
          offers, please contact me.
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
            type="submit"
          >
            My Resume
            <Arrowdown />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
