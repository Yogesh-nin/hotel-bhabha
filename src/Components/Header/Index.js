import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import logo from '../../Assets/images/logo2.png'
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">        
            <img
            src= {logo}
            width="160"
            height="65"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About us
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact us
            </Nav.Link>
            
            <Nav.Link>
              <Button variant="primary">Book Now</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
