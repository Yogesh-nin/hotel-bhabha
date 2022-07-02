import React from "react";
const MapView = (props) => {
  return (
    <div className=" d-flex justify-content-center mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4859822414633!2d70.80019461478679!3d22.2974529853251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1cafb235c1%3A0xd9ea036ac60c561d!2sHotel%20Bhabha%20Dinning%20Hall%2C%20Best%20Gujarati%20Thali%20in%20Rajkot!5e0!3m2!1sen!2sin!4v1656767569552!5m2!1sen!2sin"
        width={props.width}
        height={props.height}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapView;
