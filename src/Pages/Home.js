import React from "react";
//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import MapView from "../Components/Map.jsx";
import ContactForm from "../Components/ContactForm";
import AboutUs from "../Components/AboutUs";
import CardSlider from "../Components/CardSlider/CardSlider";
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <AboutUs />
      <CardSlider />
      <ContactForm />
      <MapView />
      <Footer />
    </div>
  );
}

export default Home;
