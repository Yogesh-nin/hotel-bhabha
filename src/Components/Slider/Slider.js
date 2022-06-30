import React from 'react'
import { Carousel } from 'react-bootstrap'
import slideimg1 from '../../Assets/images/DSC00777.jpg'
import slideimg2 from '../../Assets/images/DSC00754.jpg'
import slideimg3 from '../../Assets/images/slideimg3.jpeg'
const Slider = (props) => {
  return (
    <div>
    {props.children}
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {slideimg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ slideimg2 }
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ slideimg3 }
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
