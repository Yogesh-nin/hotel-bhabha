import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about2 from "../../Assets/images/about-grid-small.jpg";
import Slider from '../Slider/Slider'
import slideimg1 from "../../Assets/images/sliderimg-1.jpeg";
import slideimg2 from "../../Assets/images/sliderimg-2.jpeg";
import slideimg3 from "../../Assets/images/sliderimg-3.jpeg";

import "./index.css";

const RoomOverview = () => {
  return (
    <div>
      <div className="room-banner">
          <div className="animated animatedFadeInUp fadeInUp">
            <h1>Deluxe Room</h1>

            <blockquote className="quote">
              "You kind of owe it to yourself to do all the things you've dreamed of."
            </blockquote>
          </div>
          
       </div>
      <Container className="room-overview-container">
        <Row className="d-flex justify-content-around">
          <Col md={6}>
            <div className="">
              <Slider img1={slideimg1} img2={slideimg2} img3={slideimg3} />
            </div>
          </Col>
          <Col md={6} className="right-col d-flex">
            <div>
              <h2>A view to remember</h2>
              <p>Our Deluxe Room overlooks the great dunes of Noordwijk and the ever-shifting waves of the North Sea. The room is decorated with beautifully designed furniture and a handmade king size bed. This spacious room also boasts an extraordinary view of the famous Noordwijk sunset.</p>
              
            </div>
            <div className="">
              <img src={about2} className="img-thumbnail" width="90%" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomOverview;
