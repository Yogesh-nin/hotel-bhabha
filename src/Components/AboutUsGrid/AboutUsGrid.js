import React from "react";
import "./index.css";

import about1 from "../../Assets/images/about-grid-large.jpg";
import about2 from "../../Assets/images/about-grid-small.jpg";

function AboutUsGrid() {
  return (
    <div className="about-grid-container">
      <div className="d-lg-flex m-5 justify-content-between  ">
        <div className=" parent">
          <img src={about1} alt="aboutus1" className=" img-large" />
          <div className="child">
            <img src={about2} alt="aboutus2" className="img-small" />
          </div>
        </div>
        <div className="about-us py-5 ">
          <h1 className="">About Us</h1>
          <p className="mt-3">
            Quiet enough away from the hustle and bustle, and close enough to
            railway and bus station Bhabha Hotel is built in elegance to greet
            and facilitate the visitors of Rajkot city. Three kilometers away
            from the airport, Bhabha Hotel is fully furnished with all the
            modern amenities to make the stay in Rajkot City an unforgettable
            one. Bhabha Hotel designed with a great sense of aesthetic beauty
            has variety of accommodation options suiting different needs and
            preferences. Well-appointed rooms and suites provide contemporary
            comfort with delicate touches of lavishness and comfortable stay in
            the hotel. The check out time at Bhabha Hotel is fixed to 24 hours,
            which makes the stay at the hotel more convenient. The state of art
            restaurant, serving the classic gujarathi cuisine is the elated
            specialty of the hotel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsGrid;
