import "./App.css";

import { Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Room from "./Pages/Room";
import Booking from "./Pages/Booking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/rooms" element={<Room />}>
          <Route exact path=":id" element={<Room />} />
          <Route exact path=":id" element={<Room />} />
        </Route>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
