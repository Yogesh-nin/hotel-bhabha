import React from "react";

//components
import Header from "../Components/Header";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutUs from "../Components/AboutUs";
import CardSlider from "../Components/CardSlider/CardSlider";
import Facilities from "../Components/Facilities";
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <AboutUs />
      <CardSlider />
      <Facilities />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
