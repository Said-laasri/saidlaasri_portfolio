import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const Contact = () => {
  return (
    <Form className="m-5 p-4" id="contact">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} />
      </Form.Group>

      <Button variant="outline-dark" className="mb-4" size="lg" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
