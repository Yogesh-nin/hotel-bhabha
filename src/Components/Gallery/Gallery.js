import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";

import gallery1 from "../../Assets/images/gallery1.jpg";
import gallery2 from "../../Assets/images/gallery2.jpg";
import gallery3 from "../../Assets/images/gallery3.jpg";
import gallery4 from "../../Assets/images/gallery4.jpg";
import gallery5 from "../../Assets/images/gallery5.jpg";
import gallery6 from "../../Assets/images/gallery6.jpg";
import gallery7 from "../../Assets/images/gallery7.jpg";
import gallery8 from "../../Assets/images/gallery8.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

function Gallery(props) {
  const [lgShow, setLgShow] = useState(false);
  const [curImage, setCurImage] = useState();

  return (
    <>
      <div className="">
        <div className="text-center mt-5">
          <h1>Our Gallery</h1>
        </div>

        <div className="d-flex flex-wrap justify-content-center m-5  ">
          {images.map((image, index) => (
            <img
              src={image}
              alt="gallery"
              className="img"
              onClick={() => {
                setCurImage(image);
                setLgShow(true);
              }}
              id={index}
            />
          ))}
        </div>
      </div>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} centered>
        <Modal.Body>
          <img src={curImage} alt="" className="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
