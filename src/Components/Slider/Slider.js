import React from "react";
import {Carousel} from "react-bootstrap"
import './slider.css'
const Slider = (props) => {
  return (
    <div>
      {props.children}
      <Carousel fade indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="slide-img d-block w-100"
            src={props.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide-img d-block w-100"
            src={props.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide-img d-block w-100"
            src={props.img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
