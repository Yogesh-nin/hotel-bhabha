import React from "react";
import logo1 from "../../Assets/images/logo-1.png";
import Map from '../Map'
import { Container, Col, Row } from 'react-bootstrap'
import "./index.css";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";

function Footer() {
  return (
    <div className=" footer">
      <Container className="my-2">
        <Row className="footer-row">
          <Col sm={12} md={12} lg={4} className="footer-col my-4">
            <div className="footer-logo">
              <img src={logo1} width="180" height="80" className="" alt="logo" />
              <h5>Pride of Rajkot</h5>
            </div>
          </Col>
          <Col sm={12} md={5} lg={4} className="footer-col my-4">
            <h3>The Hotel</h3>
            <div>
              <ul className="list-unstyled justify-content-center">
                <li><a>Home</a></li>
                <li><a>About us</a></li>
                <li><a>Rooms</a></li>
                <li><a>Contact</a></li>
                <li><a>Facilities</a></li>
              </ul>
            </div>

          </Col>

          <Col sm={12} md={5} lg={4} className="justify-content-center footer-col my-4">
            <h3>Our Location</h3>
            <div>
              <address>Panchnath Rd, Lohana Para, Rajkot, Gujarat-360001</address>
              <Map width="200" height="150" />
            </div>
          </Col>
          {/* <Col className="footer-col">
            <div className=" d-flex justify-content-center mt-2">
              <FaFacebookF size={24} className="m-3 icons fb-icon" />
              <BsInstagram size={24} className="m-3 icons instagram-icon" />
              <SiGmail size={24} className="m-3 icons gmail-icon" />
              <SiGooglemaps size={24} className="m-3 icons map-icon" />
            </div>
          </Col> */}
        </Row>
        <hr />
        <Row>
        <div className="d-lg-flex justify-content-between px-5 p-2 align-middle text-light   ">
          {/* <p className="text-center">info@hotelbhabha.com</p> */}
          <p className="text-center">2010 © Copyright Hotel BhaBha.</p>
        </div>
        </Row>
      </Container>
    </div>
  );
}

{/* <div className="d-lg-flex d-md-flex justify-content-around align-middle h-100 p-5 border-top  ">
  <div className="d-flex justify-content-center">
    <img src={logo1} width="180" height="80" className="" alt="logo" />
  </div>
  <div className=" d-flex justify-content-center mt-2">
    <FaFacebookF size={32} className="m-3 icons fb-icon" />
    <BsInstagram size={32} className="m-3 icons instagram-icon" />
    <SiGmail size={32} className="m-3 icons gmail-icon" />
    <SiGooglemaps size={32} className="m-3 icons map-icon" />
  </div>
</div>
<div className="d-lg-flex justify-content-between px-5 p-2 align-middle text-light   ">
  <p className="text-center">info@hotelbhabha.com</p>
  <p className="text-center">2010 © Copyright Hotel BhaBha.</p>
</div> */}
export default Footer;
