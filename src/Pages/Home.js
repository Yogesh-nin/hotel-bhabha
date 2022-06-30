import React from "react";

//components
import Header from "../Components/Header/Index";
import Slider from "../Components/Slider/Slider";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <div>
        <h1>this is container</h1>
      </div>
    </div>
  );
}

export default Home;
