import React from "react";

//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import MapView from "../Components/Map.jsx";
import ContactForm from '../Components/ContactForm/index'
import { Container } from "react-bootstrap"
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <div className="d-flex-column justify-content-center ">
      <ContactForm />
      <MapView />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
