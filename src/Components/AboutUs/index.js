import React from "react";
import img1 from "../../Assets/images/DSC00754.jpg";

import read from "../../Assets/images/read.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";

import "./index.css";
const AboutUs = () => {
  return (
    <Container className="p-4 about-us-container">
      <Row className="d-flex justify-content-between">
        <Col md={12} lg={6}>
          <Row>
            <Col
              md={6}
              className="col-area my-4 animated animatedFadeInUp fadeInUp"
            >
              <Row>
                <Col md={12}>
                  <div className="text-area mb-4">
                    <div className="d-flex justify-content-center my-2">
                      <FaFacebookF size={48} className="" />
                    </div>

                    <h4 className="text-center my-3">nvdeep</h4>
                    <p className="text-center">
                      Far Far away, behind the word mountains, far from
                      countries vokalia
                    </p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="about-us-img">
                    <figure>
                      <img src={read} alt="About us" width="100%" />
                    </figure>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              md={6}
              className="col-area my-4 animated animatedFadeInUp fadeInUp"
            >
              <Row>
                <Col md={12}>
                  <div className="about-us-img">

                    <figure>
                      <img src={img1} alt="About us " width="100%" />
                    </figure>
                  </div>
                </Col>

                <Col md={12}>
                  <div className="text-area mt-4">
                    <div className="d-flex justify-content-center my-2">
                      <FaFacebookF size={48} className="" />
                    </div>
                    <h4 className="text-center my-3">title</h4>
                    <p className="text-center">
                      Far Far away, behind the word mountains, far from
                      countries vokalia
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md={12} lg={5} className="col-area-description my-4">
          <div className="animated animatedFadeInUp fadeInUp">
            <h1>Pride of Rajkot: Hotel Bhaba</h1>

            <p>
              The authentic architectural construction and custom-built room
              settings depicts the richness and expresses an overall splendor of
              times past and present of the Rajkot city. Guest rooms bedecked in
              styles of the various era of the royal history, Bhabha Hotel turns
              to the pride of Rajkot Maintaining the manner and comfort of times
              past...
            </p>
            <Button href="./about" className="book-now-btn">
              Read more...
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
