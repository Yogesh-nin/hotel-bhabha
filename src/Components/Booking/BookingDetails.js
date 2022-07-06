import React from "react";
import "./index.css";

import DatePicker from "./DatePicker";

import banner from "../../Assets/images/contact.jpg";
import RoomBookingCard from "./RoomBookingCard";

function BookingDetails(props) {
  return (
    <div>
      <div className="mt-5">
        <img src={banner} alt="banner" className="img-fluid mt-5" />
      </div>
      <div className="mt-5 card-container">
        <div className="d-flex flex-column ">
          <DatePicker />
          <h1 className="mt-5 mb-4"> Select a Room</h1>
        </div>
        <div className="">
          <RoomBookingCard />
          <RoomBookingCard />
          <RoomBookingCard />
          <RoomBookingCard />
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
