import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

import img1 from "../../Assets/images/slideimg3.jpg";

function SliderCard() {
  return (
    <div className=" d-flex justify-content-center">
      <Card style={{ width: "19.5rem" }} className="mt-5 border-0">
        <Card.Img
          variant="top"
          alt="Card image"
          src={img1}
          className="rounded-0"
        />
        <Card.Body className="p-0">
          <Card.Title
            className=" fw-bold mt-2 card-title"
            style={{ fontSize: "18px" }}
          >
            Lorem ipsum dolor sit amet
          </Card.Title>
          <Card.Subtitle
            className="mt-2 fw-semibold"
            style={{ fontSize: "14px" }}
          >
            Dec 20th By Admin
          </Card.Subtitle>
          <Card.Text
            className="text-wrap mt-3 card-description"
            style={{ fontSize: "14px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur euismod, nisl nisl
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <div className="d-flex" style={{ width: "19.5rem" }}>
        <div className="w-30">
          <img src={img1} className="img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default SliderCard;
