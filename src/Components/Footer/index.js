import React from "react";
import logo1 from "../../Assets/images/logo-1.png";
import "./index.css";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import marker from '../../Assets/images/place-marker.png'

function Footer() {
  return (
    <div>
      <div className="d-lg-flex d-md-flex justify-content-around   align-middle h-100 p-5 border-top  ">
        <div className="d-flex justify-content-center">
          <img src={logo1} width="180" height="80" className="" alt="logo" />
        </div>
        <div className=" d-flex justify-content-center mt-2">
          <FaFacebookF size={32} className="m-3 icons fb-icon" />
          <BsInstagram size={32} className="m-3 icons instagram-icon" />
          <SiGmail size={32} className="m-3 icons gmail-icon" />
          <SiGooglemaps size={32} className="m-3 icons map-icon" />
        </div>
      </div>
      <div className="d-lg-flex justify-content-between px-5 p-2 footer-2 align-middle text-light   ">
        <p className="text-center">info@hotelbhabha.com</p>
        <p className="text-center">2010 © Copyright Hotel BhaBha.</p>
      </div>
    </div>
  );
}

export default Footer;
