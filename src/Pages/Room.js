import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RoomOverview from "../Components/Rooms";
import Facilities from "../Components/Facilities";
import CardSlider from "../Components/CardSlider/CardSlider";
import { useParams } from 'react-router-dom'

const Room = () =>{

  const {id} = useParams();
  return (
    <div>
        <Header />
        <RoomOverview />
        <Facilities />
        <CardSlider />
        <Footer />
    </div>
  )
}

export default Room