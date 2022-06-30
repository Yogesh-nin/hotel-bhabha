import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo1 from "../../Assets/images/logo-1.png";
import logo2 from "../../Assets/images/logo-2.png";

const Header = () => {

  const [logo, setLogo] = useState(logo2);
  const changeNavbarLogo = () =>{
     if(window.scrollY >= 80){
       setLogo(logo2);
     }
     else{
       setLogo(logo1);
     }
  };
  window.addEventListener('scroll', changeNavbarLogo);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="180"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About us
            </Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact us
            </Nav.Link>

            <Nav.Link href="/booking">
              <Button variant="primary">Book Now</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
