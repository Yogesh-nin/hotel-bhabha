import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaWifi } from "react-icons/fa";
import { IoIosBed } from 'react-icons/io'
import { MdOutlineDoorSliding } from 'react-icons/md'

import './index.css'
const Facilities = () => {
  return (
    <Container className="facility-container">
        <Row>
            <div className="text-center facility-title">
                <h2>Facilities</h2>
            </div>
            
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><FaWifi size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wifi</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><IoIosBed size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Cozy Rooms</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><MdOutlineDoorSliding size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wardrobe</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><FaWifi size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wifi</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><FaWifi size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wifi</h3>
                    </div>
                </div>
            </Col>
            
        </Row>
    </Container>
  )
}

export default Facilities