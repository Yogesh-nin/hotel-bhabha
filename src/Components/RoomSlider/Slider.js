import React from 'react'
import gallery5 from '../../Assets/images/gallery5.jpg'
import {Container, Row, Col } from 'react-bootstrap'
import { GrLinkNext } from "react-icons/gr";
const SliderElement = () => {
  return (
    <div className="slider-column mt-4">
        <Container fluid>
            <Row>
                <Col>
                    <div className="img-container">
                        <img src={gallery5} alt="slider image" width="380rem" className="" />
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div className="room-details px-4" >
                        <div>
                            <h3 className="division-subheading">Deluxe Room</h3>
                            <p>The authentic architectural construction and custom-built room settings depicts the richness and expresses an overall splendor of times past and present of the Rajkot city.</p>
                            <span className='more'>More <span className="more-icon"><GrLinkNext /></span></span>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        
        
    </div>
  )
}

export default SliderElement