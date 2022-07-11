import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom'
import './index.css'
const SliderElement = (props) => {
  return (
    <div className="slider-column mt-4">
        <Container fluid>
            <Row>
                <Col>
                    <div className="img-container">
                        <img src={props.img} alt="slider image" width="380rem" className="" />
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div className="room-details px-4" >
                        <div>
                            <h3 className="division-subheading">{props.title}</h3>
                            <p>The authentic architectural construction and custom-built room settings depicts the richness and expresses an overall splendor of times past and present of the Rajkot city.</p>

                            <Link className="more" to={`/rooms/${props.id}`} >more <span className="more-icon"><GrLinkNext /></span></Link>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        
        
    </div>
  )
}

export default SliderElement