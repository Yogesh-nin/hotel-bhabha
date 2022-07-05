import React from "react";
import logo1 from "../../Assets/images/logo-1.png";
import Map from '../Map'
import { Container, Col, Row } from 'react-bootstrap'
import "./index.css";
import { Link } from "react-router-dom"

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";

function Footer() {
  return (
    <div className=" footer">
      <Container className="my-2">
        <Row className="footer-row d-flex justify-content-between">
          <Col sm={12} md={12} lg={4} className="footer-col my-4">

            {/* Footer logo */}

            <div className="footer-logo">
              <img src={logo1} width="180" height="80" className="" alt="logo" />
              <h5>Pride of Rajkot</h5>
            </div>

            {/* Footer social icons */}

            <div className=" d-flex justify-content-center mt-3">
              <FaFacebookF size={24} className="m-3 icons fb-icon" />
              <BsInstagram size={24} className="m-3 icons instagram-icon" />
              <SiGmail size={24} className="m-3 icons gmail-icon" />
              <SiGooglemaps size={24} className="m-3 icons map-icon" />
            </div>
          </Col>
          <Col sm={12} md={5} lg={4} className="footer-col my-4 px-4">

            <h3>The Hotel</h3>
            <div>
              <ul className="list-unstyled justify-content-center">
                <li className="footer-list-items"><Link to="/">Home</Link></li>
                <li className="footer-list-items"><Link to="/about">About us</Link></li>
                <li className="footer-list-items"><Link to="#">Rooms</Link></li>
                <li className="footer-list-items"><Link to="#">Contact</Link></li>
                <li className="footer-list-items"><Link to="#">Facilities</Link></li>
              </ul>
            </div>

          </Col>

          <Col sm={12} md={5} lg={4} className="justify-content-center footer-col my-4 px-4">

            {/* address */}

            <h3>Our Location</h3>
            <div>
              <address>Panchnath Rd, Lohana Para, Rajkot, Gujarat-360001</address>

              {/* Map */}

              <Map width="200" height="150" />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
        <div className="d-lg-flex justify-content-between px-5 p-2 align-middle  ">
          {/* <p className="text-center">info@hotelbhabha.com</p> */}
          <p className="text-center">2010 © Copyright Hotel BhaBha.</p>
        </div>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
