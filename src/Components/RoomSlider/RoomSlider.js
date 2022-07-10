import React from "react";
import Slider from "react-slick";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from './Slider'


function RoomSlider() {
  var settings = {
    dots: false,
    arrow: false,
    centerPadding: 10,
    // nextArrow: <GrLinkNext />,
    // prevArrow: <GrLinkPrevious />,
    infinite: false,
    speed: 500,
    slidesToShow: 1.6,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
      <div className="room-slider-container p-5">
        <h2 className="division-heading">Stay & Live</h2>
            <Slider {...settings}>
                <SliderElement />
                <SliderElement />
                <SliderElement />
                <SliderElement />
                <SliderElement />
            </Slider>
      </div>
    </>
  );
}

export default RoomSlider;
