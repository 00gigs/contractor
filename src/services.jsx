import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import thumb from "./assets/BuildaHouse-730x485-1.jpg";

function Services() {
  return (
    <div className="grid">
      <Container>
        <Row>
          <Col style={{ border: "1px solid black" }} md={6}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Button>select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ border: "1px solid black" }} md={6}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Button>select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "1px solid black" }} sm={4}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Button>select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ border: "1px solid black" }} sm={4}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Button>select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ border: "1px solid black" }} sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
