import React from "react";
const MapView = () => {
  return (
    <div className="container d-flex justify-content-center m-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.385539655501!2d77.13583401505258!3d28.737903886054923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d010e453713d7%3A0xad24b96a4ea19d4a!2sParadise%20Apartments%2C%20Block%20E%2C%20Sector%2018%2C%20Rohini%2C%20Delhi%2C%20110089!5e0!3m2!1sen!2sin!4v1656619408481!5m2!1sen!2sin"
        width="1100"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapView;
