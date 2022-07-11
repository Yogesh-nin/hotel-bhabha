import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

import logo1 from "../../Assets/images/logo-1.png";
import logo2 from "../../Assets/images/logo-2.png";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  const [logo, setLogo] = useState(logo1);
  const [width, setWidth] = useState("180");
  const [height, setHeight] = useState("80");
  const [bg, setbg] = useState("");
  const changeNavbarLogo = () => {
    if (window.scrollY >= 80) {
      setLogo(logo2);
      setWidth("160");
      setHeight("50");
      setbg("bg-grey");
    } else {
      setLogo(logo1);
      setWidth("180");
      setHeight("80");
      setbg("");
    }
  };
  window.addEventListener("scroll", changeNavbarLogo);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`navbar ${bg}`}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width={width}
            height={height}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
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
            <Nav className="nav-items mx-3">
              <Nav.Link as={Link} className="nav-links" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="nav-links"
                eventKey={2}
                to="/about"
              >
                About
              </Nav.Link>

              <NavDropdown
                title="rooms"
                id="navbarScrollingDropdown"
                renderMenuOnMount={true}
              >
                <div className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/rooms/standard-room">
                    Standard room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/deluxe-room">
                    Delux room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/family-room">
                    Family room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/executive-room">
                    Executive room
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rooms/superior-room">
                    Superior room
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link
                as={Link}
                className="nav-links"
                eventKey={2}
                to="/contact"
              >
                Contact us
              </Nav.Link>
              <Nav.Link as={Link} to="/booking">
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
