import React from "react";

import "./index.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RoomBookingCard() {
  return (
    <>
      <Card className="room-card">
        <div className="d-lg-flex  d-md-flex gap-3 justify-content-around">
          <div>
            <Card.Img src="https://picsum.photos/500/500" />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title>Standard Room</Card.Title>
              <Card.Subtitle> Sleeps 3 | 1 King | 398 ft²</Card.Subtitle>
              <Card.Text className="mt-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="flex float-end">
                Book Now
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
}

export default RoomBookingCard;
