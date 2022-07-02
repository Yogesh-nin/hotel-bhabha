import React from "react";

import about1 from "../Assets/images/aboutus2.jpg";
import about2 from "../Assets/images/aboutus1.jpg";

function Gallery() {
  return (
    <>
      <div className="d- justify-content-center">
        <div>
          <h1>Our Gallery</h1>
        </div>
        <div className="grid ">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about1} alt="" />
          <img src={about2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
