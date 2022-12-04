import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Schedule from "../components/Schedule";
import Booking from "../components/Booking";
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Schedule />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
