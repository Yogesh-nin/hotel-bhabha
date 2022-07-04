import React from "react";

//components
import Header from "../Components/Header";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
