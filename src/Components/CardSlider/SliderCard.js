import Card from "react-bootstrap/Card";

import img1 from "../../Assets/images/slideimg3.jpg";

function SliderCard() {
  return (
    <div className=" d-flex justify-content-center mt-5">
      <Card style={{ width: "19.5rem" }} className="mt-5 border-0">
        <Card.Img variant="top" src={img1} className="rounded-0" />
        <Card.Body className="p-0">
          <Card.Title className=" fw-bold mt-2" style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit amet
          </Card.Title>
          <Card.Subtitle
            className="mt-2 fw-semibold"
            style={{ fontSize: "14px" }}
          >
            Dec 20th By Admin
          </Card.Subtitle>
          <Card.Text className="text-wrap mt-3" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur euismod, nisl nisl
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SliderCard;
