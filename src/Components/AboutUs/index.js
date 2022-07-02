import React from "react";
import img1 from "../../Assets/images/DSC00754.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";

import "./index.css";
const AboutUs = () => {
  return (
    <Container className="my-5 p-4 about-us-container">
      <Row>
        <Col md={3} className="col-area my-4">
          <Row>
            <Col md={12}>
              <div className="text-area mb-4">
                <div className="d-flex justify-content-center my-2">
                    <FaFacebookF size={48} className="" />
                </div>

                <h4 className="text-center my-3">title</h4>
                <p className="text-center">
                  Far Far away, behind the word mountains, far from countries vokalia   
                </p>
              </div>
            </Col>
            <Col md={12}>
              <div className="about-us-img">
                <img src={img1} alt="About us image" width="100%" />
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={3} className="col-area my-4">
          <Row>
            <Col md={12}>
              <div className="about-us-img">
                <img src={img1} alt="About us image" width="100%" />
              </div>
            </Col>

            <Col md={12}>
              <div className="text-area mt-4">
                <div className="d-flex justify-content-center my-2">
                    <FaFacebookF size={48} className="" />
                </div>
                <h4 className="text-center my-3">title</h4>
                <p className="text-center">
                    Far Far away, behind the word mountains, far from countries vokalia   
                  
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={5} className="col-area-description my-4">
          <div className="">
            <h1>Unwind A Hotel Booking Agency</h1>

            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <Button className="book-now-btn">Enquiry now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
