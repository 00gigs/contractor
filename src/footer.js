import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Nav className="me-auto">
            <Nav.Link href="#home">contact</Nav.Link>
            <Nav.Link href="#features">socials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    )
    }
export default Footer