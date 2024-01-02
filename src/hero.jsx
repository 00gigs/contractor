import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import phone from "./assets/icons8-phone-50.png";
import person from "./assets/icons8-person-30.png";
import company from "./assets/icons8-company-50.png";
import email from "./assets/icons8-email-30.png";
import descr from "./assets/icons8-description-64.png";

function Hero() {
  const Handleclick = () => {
    console.log("you clicked");
  };

  return (
    <div className="hero-bg">
      <div className="left-side-hero">
        <h1 class="display-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
          voluptate earum magnam optio deserunt excepturi nihil odio adipisci
          necessitatibus, natus, ab quam explicabo.
        </h1>
      </div>
      <div className="right-side-hero">
        <Form>
            <Form.Text style={{fontStyle:"oblique"}}>Fill out this form to discuss your ideas with a contractor today!</Form.Text>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Hero;
