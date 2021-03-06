import React from "react";
import './index.css'
import { Container, Row, Col, Button } from "react-bootstrap";

import weeding from "../../Assets/images/weeding.jpg";

import meeting from "../../Assets/images/meeting.jpg";
// import meeting2 from "../../Assets/images/meeting2.jpg";x

import restaurant2 from "../../Assets/images/restaurant2.jpg";
// import food1 from "../../Assets/images/food1.jpg";
// import food2 from "../../Assets/images/food2.jpg";

function HallAndDiningHome() {
  return (
    <>
      <Container id="halls-home">
        <Row>
          <h2 className="division-heading">Dine & Shine</h2>
          <Col md={12}>
            <Row>
              <Col md={6} className="col-area my-4 ">
                <Row lg={2}>
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={weeding} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={meeting} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={meeting} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>{" "}
                  <Col md={12}>
                    <div className="mt-4">
                      <figure>
                        <img src={restaurant2} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="p-4 mt-4 bg-grey">
                      <h3 className="division-subheading my-3">
                        We organize best in town business meeting and seminars
                      </h3>
                      <p className="">
                        Far Far away, behind the word mountains, far from
                        countries vokalia
                      </p>
                      <Button className="book-now-btn">Explore</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="col-area my-4 ">
                <Row>
                  <Col md={12} className="mb-4">
                    <div className="p-4 mt-4 bg-grey">
                      <h2 className="division-subheading my-3">Explore the traditional taste..</h2>
                      <p className="">
                        Far Far away, behind the word mountains, far from
                        countries vokalia
                      </p>
                      <Button className="book-now-btn">Explore</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={16}>
                    <div className="">
                      <figure>
                        <img src={restaurant2} alt="About us" width="100%" />
                      </figure>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HallAndDiningHome;
