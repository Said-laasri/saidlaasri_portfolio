import React from "react";
import { Card, CardGroup, Container, Button } from "react-bootstrap";

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://picsum.photos/200/300",
      link: "https://example.com",
      live: "https://example.com",
    },
    {
      title: "Project 2",
      description:
        "This card has supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/300",
      link: "https://example.com",
      live: "https://example.com",
    },
    {
      title: "Project 3",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      image: "https://picsum.photos/200/300",
      link: "https://example.com",
      live: "https://example.com",
    },
  ];

  return (
    <Container id="project">
      <h1 className="section text-center mt-4 p-2">Projects</h1>

      <CardGroup className="m-4" id="tech">
        {projects.map((project, index) => (
          <Card className="m-3 bg-transparent" key={index}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                style={{ marginRight: "4px" }}
                href={project.link}
                class="btn btn-outline-primary"
                target="_blank"
                variant="primary"
              >
                View on Github
              </Button>
              <Button
                href={project.live}
                target="_blank"
                class="btn btn-outline-success"
                variant="success"
              >
                Live Demo
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default Project;
