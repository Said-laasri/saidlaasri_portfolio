import { Card, CardGroup, Container } from "react-bootstrap";
import code from "./../assets/code.png";
import design from "./../assets/designer.png";
import maintenance from "./../assets/software.png";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Build responsive and user-friendly websites using modern web technologies.",
      image: code,
    },
    {
      title: "UI/UX Design",
      description:
        "Create visually appealing and intuitive user interfaces for web applications.",
      image: design,
    },
    {
      title: "Website Maintenance",
      description:
        "Provide ongoing support and updates for existing websites to ensure smooth functioning.",
      image: maintenance,
    },
  ];

  return (
    <Container id="services" data-aos="fade-right">
      <h1 className="section text-center mt-4 p-2" data-aos="fade-right">
        Services
      </h1>
      <CardGroup className="m-4">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <Card className="m-3 bg-transparent" data-aos="flip-left">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    style={{ width: "100px" }}
                  />
                </div>
                <Card.Body className="card-body">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </CardGroup>
    </Container>
  );
};

export default Services;
