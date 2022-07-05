import React from "react";
import "./index.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
// import { FaRegCalendarAlt } from "react-icons/fa";

import banner from "../../Assets/images/contact.jpg";

function BookingDetails(props) {
  // function handleSelect(date) {
  //   console.log(date);
  // }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div>
      <div className="room-banner">
        <img src={banner} alt="banner" className="img-fluid" />
      </div>
      <div className="">
        <h2> Select a Room</h2>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={(item) => selectionRange([item.selection])}
        />
      </div>
    </div>
  );
}

export default BookingDetails;
