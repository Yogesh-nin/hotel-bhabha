import React from "react";
import "./index.css";

// import { FaHotel, FaPhoneAlt } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";

import contact1 from "../../Assets/images/contact.jpg";
// import Map from "../../Components/Map";

function ContactUs(props) {
  return (
    <div id="contact-container">
      <div className="block">
        <div className="contact">
          <img src={contact1} alt="Contact Us" className=" img-fluid" />

          <h1>Contact Us</h1>
        </div>

        <div className=" container mt-5 mx-lg-5 ">
          <h3 className="font-semibold">Contact Hotel BhaBha</h3>
          <p className="mt-2">
            Get answers to your questions or give feedback, however you like to
            get in touch and wherever you are in the world. Choose from email,
            phone or an online contact form and we’ll help you direct your
            inquiries to the right place, quickly and easily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

/* <div className=" justify-content-around   mt-5  px-5">
        <div className="address-card ">
          <h4>
            <FaHotel /> Hotel address
          </h4>
          <p className="text-center">
            Panchnath Rd, Lohana Para, Rajkot, Gujarat-360001
          </p>
          <p>
            <FaPhoneAlt /> +91-281-2220861
          </p>
          <p>
            <FiMail /> info@hotelbhabha.com
          </p>
        </div>
        <div>
          <Map width="500" height="200" />
        </div>
      </div> */
