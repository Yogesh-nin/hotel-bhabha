import React from "react";
import "./index.css";

import about1 from "../../Assets/images/aboutus2.jpg";
import about2 from "../../Assets/images/aboutus1.jpg";

function AboutUsGrid() {
  return (
    <>
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
      <div className="pride-heritage py-2  justify-content-center ">
        <h4 className="">Pride of Rajkot: Hotel Bhaba</h4>
        <p className="mt-3">
          The authentic architectural construction and custom-built room
          settings depicts the richness and expresses an overall splendor of
          times past and present of the Rajkot city. Guest rooms bedecked in
          styles of the various era of the royal history, Bhabha Hotel turns to
          the pride of Rajkot Maintaining the manner and comfort of times past,
          at the same time ensuring the latest accommodation amenities
          throughout the entire building makes hotel Bhabha a perfect location
          for business and leisure travelers.
        </p>
      </div>
    </>
  );
}

export default AboutUsGrid;
