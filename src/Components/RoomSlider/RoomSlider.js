import React from "react";
import Slider from "react-slick";

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from './Slider'

import executiveRoom from '../../Assets/images/executive-room.jpeg'
import superiorRoom from '../../Assets/images/superior-room.jpeg'
import deluxeRoom from '../../Assets/images/delux-img-4.jpeg'


function RoomSlider() {
  var settings = {
    dots: false,
    arrow: true,
    centerPadding: 10,
    nextArrow: <HiArrowCircleRight />,
    prevArrow: <HiArrowCircleLeft />,
    infinite: false,
    speed: 700,
    slidesToShow: 1.7,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    variableleWidth: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
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
              {/* Executive room */}
                <SliderElement id="executive-room" img={executiveRoom} title="Executive Room" description="The Executive Room comprises of a King Size bed with Couple Chairs and a coffee table, carpet on the floor, a Writing Desk & Spacious Wardrobe. Fully equipped bathroom finished with Jaquar bath fittings and top quality bronze colored ceramics and an independent entrance" />

                {/* Superior Room */}
                <SliderElement id="superior-room" img={superiorRoom}  title="Superior Room" description="The Superior Room comprises of a King Size bed, wide seating area with Couple Chairs and a coffee table, carpet on the floor, a Writing Desk & Spacious Wardrobe. Fully equipped bathroom finished with Jaquar bath fittings and top quality bronze colored ceramics and an independent entrance." />

                {/* Deluxe room */}
                <SliderElement id="deluxe-room" img={deluxeRoom}  title="Deluxe Room" description="" />
                <SliderElement id="family-room" img={executiveRoom}  title="Family Room" />
                <SliderElement id="standard-room" img={executiveRoom}  title="Standard Room" />
            </Slider>
      </div>
    </>
  );
}

export default RoomSlider;
