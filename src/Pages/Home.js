import React from "react";

//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import MapView from "../Components/Map.jsx";

import CardSlider from "../Components/CardSlider/CardSlider";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <CardSlider />
      <MapView />

      <Footer />
    </div>
  );
}

export default Home;
