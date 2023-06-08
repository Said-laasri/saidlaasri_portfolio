import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./project.css";
import log from "./../assets/logis.png";
import todo from "./../assets/todo.png";
import port from "./../assets/portfo.png";
import shop from "./../assets/shop.png";
import food from "./../assets/food.png";
import portv0 from "./../assets/portfov0.png";
import bookstore from "./../assets/bookstore.png";
import reantal from "./../assets/rental.jpg";
import tv from "./../assets/tv.png";

const Project = () => {
  const projects = [
    {
      title: "LOGISTICS GLOBAL",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: log,
      link: "https://github.com/Said-laasri/capstone_conference",
      live: "https://said-laasri.github.io/capstone_conference/",
    },
    {
      title: "todo-list",
      description:
        " Stay organized and boost productivity with our intuitive Todo List app. Easily create and manage tasks, set deadlines, and prioritize your activities. With a clean and user-friendly interface.",
      image: todo,
      link: "https://github.com/Said-laasri/todo-list",
      live: "https://said-laasri.github.io/todo-list/",
    },
    {
      title: "portfolio V1",
      description:
        " Showcase my journey, skills, and projects all in one place. Present my professional achievements and highlight my expertise through a visually appealing and interactive platform in it's first version",
      image: port,
      link: "https://github.com/Said-laasri/myPortfolio",
      live: "https://my-portfolio-sepia-one.vercel.app/",
    },
    {
      title: " ecomerce_shop",
      description:
        "Discover the latest fashion trends and shop for stylish clothing from the comfort of your own home. Explore a diverse collection of clothing items, accessories, and footwear.",
      image: shop,
      link: "https://github.com/Said-laasri/ecomerce_shop",
      live: "https://github.com/Said-laasri/ecomerce_shop",
    },
    {
      title: "order_your_food",
      description:
        "Order delicious meals from a wide range of restaurants, with easy browsing,and order.",
      image: food,
      link: "  https://github.com/Said-laasri/order_your_food",
      live: "https://delicious-g426tn1zy-said-laasri.vercel.app/",
    },
    {
      title: "Portfolio V0.1",
      description:
        "Showcase my journey, skills, and projects all in one place. Present my professional achievements and highlight my expertise through a visually appealing and interactive platform in it's first version",
      image: portv0,
      link: "https://github.com/Said-laasri/My-Porfolio-Website",
      live: " https://said-laasri.github.io/My-Porfolio-Website/",
    },
    {
      title: "Exotic Rentals",
      description:
        "Exotic Rentals is a car rental agencies primarily serve people who require a temporary vehicle, It allows users to create an account, log in, and book a car for a specific period of time. It also allows users to view all available cars, and view a specific car.",
      image: reantal,
      link: "https://github.com/NickEmma/car-rental-app",
      live: "https://github.com/NickEmma/car-rental-app",
    },
    {
      title: "Book Store",
      description:
        "The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author, and selecting from the categories, and remove a selected book.",
      image: bookstore,
      link: "https://github.com/Said-laasri/bookstore-react",
      live: "https://bookstore-react-gamma.vercel.app/",
    },
    {
      title: "Tv-show",
      description:
        "Tv-show is a website for a tv show that contains information about the tv show and the episodes and the schedule of the tv show.",
      image: tv,
      link: "https://github.com/Said-laasri/Tv-show",
      live: "https://bespoke-kelpie-bb37b1.netlify.app/",
    },
  ];

  return (
    <Container id="project">
      <h1 className="section text-center mt-4 p-2">Projects</h1>

      <CardGroup className="m-4" id="tech">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <Card className="m-3 bg-transparent">
                <div className="image-container">
                  <Card.Img variant="top" src={project.image} />
                </div>
                <Card.Body className="card-body">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    style={{ margin: "4px" }}
                    href={project.link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    variant="primary"
                    rel="noreferrer"
                  >
                    View on Github
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-outline-success"
                    type="button"
                    variant="success"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </CardGroup>
    </Container>
  );
};

export default Project;
