import React from "react";
import { Carousel } from "react-bootstrap";
import slideimg1 from "../../Assets/images/DSC00777.jpg";
import slideimg2 from "../../Assets/images/DSC00754.jpg";
import slideimg3 from "../../Assets/images/slideimg3.jpeg";

const Slider = (props) => {
  return (
    <div>
      {props.children}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slideimg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideimg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideimg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
