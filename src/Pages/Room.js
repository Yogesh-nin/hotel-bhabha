import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RoomOverview from "../Components/Rooms";
import Facilities from "../Components/Facilities";
import RoomSlider from "../Components/RoomSlider/RoomSlider";
import { useParams } from 'react-router-dom'

const Room = () =>{


  const { id } = useParams();

  const renderElement = ( () =>{
    if(id === 'deluxe-room')
      return <RoomOverview roomTitle="Deluxe Room" />
    
    else if(id === 'standard-room')
      return <RoomOverview roomTitle="Standard Room" />

    else if(id === 'superior-room')
      return <RoomOverview roomTitle="Superior Room" />

    else if(id === 'executive-room')
      return <RoomOverview roomTitle="Executive Room" />

    else if(id === 'family-room')
      return <RoomOverview roomTitle="Family Room" />
    
  })

  console.log(id)
  return (
    <div>
        <Header /> 
        {
          (renderElement())
        } 
        <Facilities />
        <RoomSlider />
        <Footer />
    </div>
  )
}

export default Room