import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaWifi } from "react-icons/fa";
import { GiMeditation } from 'react-icons/gi'
import { MdEmojiTransportation, MdRestaurantMenu, MdLocalLaundryService } from "react-icons/md";
import './index.css'
const Amneties = () => {
  return (
    <Container className="amneties-container">
        <Row>
            <h1 className="division-heading">Our Hotel Offer</h1>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><FaWifi size={56} /></span>
                   <div className="icon-text">Free Wifi</div>
                </div>
            </Col>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><MdEmojiTransportation size={56} /></span>
                   <div className="icon-text">Transportation</div>
                </div>
            </Col>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><MdRestaurantMenu size={56} /></span>
                   <div className="icon-text">Restaurant</div>
                </div>
            </Col>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><MdLocalLaundryService size={56} /></span>
                   <div className="icon-text">Laundry Service</div>
                </div>
            </Col>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><GiMeditation size={56} /></span>
                   <div className="icon-text">Meditation room</div>
                </div>
            </Col>
            <Col md={4} lg={2}>
                <div className="amneties-item">
                   <span className="amneties-icon"><FaWifi size={56} /></span>
                   <div className="icon-text">Free Wifi</div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Amneties