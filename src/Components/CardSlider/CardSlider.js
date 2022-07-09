import React from "react";
import Slider from "react-slick";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import SliderCard from "./SliderCard";

function CardSlider() {
  var settings = {
    dots: false,
    arrow: true,
    centerPadding: 10,
    nextArrow: <GrLinkNext />,
    prevArrow: <GrLinkPrevious />,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="card-slider-container text-center p-5">
        <h2>Our Rooms</h2>
        <Slider {...settings}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </Slider>
      </div>
    </>
  );
}

export default CardSlider;
