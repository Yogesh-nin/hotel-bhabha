import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas, OffcanvasBody } from "react-bootstrap";
import logo1 from "../../Assets/images/logo-1.png";
import logo2 from "../../Assets/images/logo-2.png";
import logo3 from "../../Assets/images/logo3.png";

import "./index.css"

const Header = () => {

  const [logo, setLogo] = useState(logo2);
  const [width, setWidth] = useState("180");
  const [height, setHeight] = useState("80");
  const [bg, setbg] = useState("");
  const changeNavbarLogo = () =>{
     if(window.scrollY >= 80){
       setLogo(logo2);
       setWidth("160");
       setHeight("50");
       setbg("bg-grey")

     }
     else{
       setLogo(logo1);
       setWidth("180")
       setHeight("80")
       setbg("")
     }
  };
  window.addEventListener('scroll', changeNavbarLogo);

  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className={`navbar ${bg}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width = {width}
            height={ height}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          className="justify-content-end"
          placement="end"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
        >
          <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  <img src={logo2} alt="Hotel Logo" width="100" height="40" />
              </Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="d-block d-md-none" />
          <Offcanvas.Body className="justify-content-end">
          <Nav className="align-items-center nav-items">
            <Nav.Link className="mx-2 nav-links" href="/">Home</Nav.Link>
            <Nav.Link className="nav-links" eventKey={2} href="/about">
              About us
            </Nav.Link>
            <Nav.Link className="nav-links" eventKey={2} href="/contact">
              Contact us
            </Nav.Link>

            <Nav.Link href="/booking">
              <Button className="book-now-btn">Book Now</Button>
            </Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
