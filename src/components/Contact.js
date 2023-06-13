import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./Map";
import "./contact.css";

const Contact = () => {
  return (
    <Container >
      <h1 className="section text-center mt-4 p-2" data-aos="fade-right">Contact Me</h1>
      <Row className="justify-content-center" data-aos="fade-up">
        <Col md={6}>
          <ListGroup className="m-5 p-4">
            <ListGroup.Item className="input-line">
              +212 636415773
            </ListGroup.Item>
            <hr />
            <ListGroup.Item className="input-line">
              laasrisaid34@gmail.com
            </ListGroup.Item>
            <hr />
            <ListGroup.Item className="input-line">
              <svg
                width="30px"
                height="30x"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>{" "}
                  <path
                    d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Belfaa, Morocco
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Form className="m-5 p-4" id="contact">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="input-line"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Your Email Address"
                className="input-line"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                className="input-line"
              />
            </Form.Group>

            <button
              variant="primary"
              className="mb-4"
              class="btn btn-outline-dark"
              size="lg"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Col>
      </Row>
      <Map />
    </Container>
  );
};

export default Contact;
