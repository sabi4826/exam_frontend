import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
