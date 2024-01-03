import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

function Hero() {
  const Handleclick = () => {
    console.log("you clicked");
  };

  return (
    <div className="hero-bg">
      <div className="left-side-hero">
        <h1>Local reviews...</h1>
        <Carousel>
          <Carousel.Item>
            <h1 class="display-6">
              "New Horizon Builders delivered beyond expectations.
              Professionalism, attention to detail, and stress-free
              communication made our dream home a reality. Highly recommend
              their expertise." Sarah Thompson, Happy Homeowner
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1 class="display-6">
              "DreamCraft Homes exceeded expectations, delivering on time and
              within budget. Their commitment to excellence and innovation made
              our home-building experience truly impressive. Thank you!" Michael
              and Emily Rodriguez, Satisfied Clients
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1 class="display-6">
              Liberty Homes, a masterpiece in home construction. Meticulous
              attention to detail, commitment to quality, and passion from the
              team created our dream home. Highly recommend their top-notch
              experience. - James and Lisa Anderson, Proud Homeowners
            </h1>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="right-side-hero">
        <Form>
          <Form.Text style={{ fontStyle: "oblique" }}>
            Fill out this form to discuss your ideas with a contractor today!
          </Form.Text>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="First and Last name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control placeholder="Company" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control
              placeholder="Please  enter a brief description of the job "
              as="textarea"
            />
          </Form.Group>
          <Link to="/book">
            <Button variant="primary" type="submit" onClick={Handleclick}>
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
export default Hero;
