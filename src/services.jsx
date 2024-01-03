import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import thumb from "./assets/BuildaHouse-730x485-1.jpg";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div className="grid">
      <Container fluid className="mx-auto" style={{display:"grid", justifyItems:'center'}}>
        <Row className="justify-content-around">
          <Col md={6}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Link to="/services">
                <Button>select</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card" style={{ width: "300px" }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Link to="/services">
                <Button>select</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card className="card" style={{  width: "300px"}}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Link to="/services">
                <Button>select</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="card" style={{ width: "300px"  }}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Link to="/services">
                <Button>select</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
          <Card  className="card" style={{ width: "300px"}}>
              <Card.Img variant="top" src={thumb} />
              <Card.Body>
                <Card.Title>
                  <Card.Text></Card.Text>
                </Card.Title>
                <Link to="/services">
                <Button>select</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
