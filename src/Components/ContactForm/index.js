import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import './index.css'


const ContactForm = () => {
  return (
    <Container>
      <Row className="justify-content-around py-5 form-container">
        <Col md={6}>
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

        </Col>

        <Col md={5} className="d-none d-md-block">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" className="form-input" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Address">
              <Form.Control type="text" className="form-input" placeholder="Address" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Control type="email" className="form-input" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Control type="phone" className="form-input" placeholder="Phone" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="Subject">
              <Form.Control type="text" className="form-input" placeholder="Subject" />
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
