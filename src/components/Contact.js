import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./Map";

const Contact = () => {
  return (
    <Container>
      <h1 className="section text-center mt-4 p-2">Contact Me</h1>
      <Row>
        <Col>
          <ListGroup className="m-5 p-4" >
            <ListGroup.Item>+212636415773</ListGroup.Item>
            <hr />
            <ListGroup.Item>Laasrisaid34@gmail.com</ListGroup.Item>
            <hr />
            <ListGroup.Item>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 395.71 395.71"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Belfaa, Morocco
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          {" "}
          <Form className="m-5 p-4" id="contact">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                size="lg"
                as="textarea"
                rows={3}
                placeholder="Enter Message"
              />
            </Form.Group>

            <Button
              variant="outline-dark"
              className="mb-4"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Map />
    </Container>
  );
};

export default Contact;
