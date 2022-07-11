import React from "react";

//components
import Header from "../Components/Header/index";
import AboutUsGrid from "../Components/AboutUsGrid/AboutUsGrid";
import Footer from "../Components/Footer/index";
import Gallery from "../Components/Gallery/Gallery";

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
