import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navi() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-dark" style={{marginBottom:"1rem"}}>
      <Container>
        <Navbar.Brand style={{color:'whitesmoke'}} href="/">New Year Contractors</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{margin:'.5rem', textDecorationLine:'none', color:'whitesmoke'}} to="/newhomes">New Homes</Link>
            <Link style={{margin:'.5rem', textDecorationLine:'none', color:'whitesmoke'}} to="/Renovation">Renovation</Link>
            <Link style={{margin:'.5rem', textDecorationLine:'none', color:'whitesmoke'}} to="/Portfolio">Portfolio</Link>
            <Link style={{margin:'.5rem', textDecorationLine:'none', color:'whitesmoke'}} to="/FloorPlans">FloorPlans</Link>
            <Link style={{margin:'.5rem', textDecorationLine:'none', color:'whitesmoke'}} to="/services">Services</Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item to="/Contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navi;
