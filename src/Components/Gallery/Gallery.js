import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

import "./index.css";

// import about1 from "../../Assets/images/aboutus2.jpg";
// import about2 from "../../Assets/images/aboutus1.jpg";

const images = [
  " https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  " https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

function Gallery(props) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="">
        <div className="text-center">
          <h1>Our Gallery</h1>
        </div>

        <div className="d-flex flex-wrap justify-content-center m-5  ">
          {images.map((image, index) => (
            <img
              src={image}
              alt="gallery"
              className="img"
              onClick={() => setLgShow(true)}
              id={index}
            />
          ))}
        </div>
      </div>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} centered>
        <Modal.Body>
          <img src="" alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
