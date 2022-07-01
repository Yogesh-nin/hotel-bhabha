import React from "react";
import OffcanvasExample from '../Components/Header/Offcanvas'
//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import MapView from "../Components/Map.jsx";
import ContactForm from '../Components/ContactForm'

import CardSlider from "../Components/CardSlider/CardSlider";
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <CardSlider />
      <ContactForm />
      <MapView />
      <Footer />
    </div>
  );
}

export default Home;
