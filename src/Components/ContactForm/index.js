import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { FaHotel, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./index.css";
import Map from "../../Components/Map";

const ContactForm = (props) => {
  return (
    <Container className="d-flex  justify-content-center mb-5">
      <Row className="justify-content-between p-3 form-container">
        <Col md={5}>
          <div className=" ">
            <div className="address-card ">
              <h2>
                <FaHotel /> Hotel address
              </h2>
              <p className="text-center text-wrap">
                Panchnath Rd, Lohana Para, Rajkot, Gujarat-360001
              </p>
              <p>
                <FaPhoneAlt /> +91-281-2220861
              </p>
              <p>
                <FiMail /> info@hotelbhabha.com
              </p>
            </div>
            <div>
              <ul className="social-icons list-unstyled d-flex justify-content-center">
                <li>
                  <a className="contact-icons contact-fb-icon">
                    <FaFacebookF size={24} className="" />
                  </a>
                </li>
                <li>
                  <a className="contact-icons contact-ig-icon">
                    <BsInstagram size={24} className="" />
                  </a>
                </li>
                <li>
                  <a className="contact-icons contact-mail-icon">
                    <SiGmail size={24} className="" />
                  </a>
                </li>
                <li>
                  <a className="contact-icons contact-map-icon">
                    <SiGooglemaps size={24} className="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <Map width="300" height="200" />
            </div>
          </div>
        </Col>

        <Col md={5} className="d-none d-md-block">
          <h2 className="mb-4 mt-4 ">
            <FaHotel /> Hotel address
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Address">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Address"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Control
                    type="email"
                    className="form-input"
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Control
                    type="phone"
                    className="form-input"
                    placeholder="Phone"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="Subject">
              <Form.Control
                type="text"
                className="form-input"
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message here"
                className="form-input"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" className="float-right submit-btn">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;

/* <Col md={6}>
          <h1 className="text-center">CONNECT WITH US</h1>
          <p className="text-center">
            Want to work with us? We’d love to hear from you.
          </p>

          <p className="text-center">
            Plot No: 26, Shobana Colony, Mahatma Gandhi Nagar, West Marredpally,
            Secunderabad, Telangana 500026, India
          </p>

          <p className="text-center">info@hotelbhabha.com</p>

          <div>
            <ul className="social-icons list-unstyled d-flex justify-content-center">
                <li><a className="contact-icons contact-fb-icon"><FaFacebookF size={24} className="" /></a></li>
                <li><a className="contact-icons contact-ig-icon"><BsInstagram size={24} className="" /></a></li>
                <li><a className="contact-icons contact-mail-icon"><SiGmail size={24} className="" /></a></li>
                <li><a className="contact-icons contact-map-icon"><SiGooglemaps size={24} className="" /></a></li>
            </ul>
          </div>

        </Col> */
