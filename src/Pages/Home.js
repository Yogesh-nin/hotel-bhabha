import React from "react";

//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import MapView from "../Components/Map.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <MapView />
      <Footer />
    </div>
  );
}

export default Home;
