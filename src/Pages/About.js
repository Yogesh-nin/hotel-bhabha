import React from "react";

//components
import Header from "../Components/Header/Index";
import AboutUsGrid from "../Components/AboutUsGrid/AboutUsGrid";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";

function About() {
  return (
    <>
      <Header />
      <AboutUsGrid />
      <Gallery />
      <Footer />
    </>
  );
}

export default About;
