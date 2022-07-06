import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RoomOverview from "../Components/Rooms";
import Facilities from "../Components/Facilities";
import CardSlider from "../Components/CardSlider/CardSlider";


const Room = () =>{
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