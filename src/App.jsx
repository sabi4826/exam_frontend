import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Schedule from "../components/Schedule";
import Basket from "../components/Basket";
import TicketSection from "../components/TicketSection";
import bookingStyles from "../src/style/booking.module.css";
import BookingH2 from "../components/BookingH2";
import Newsletter from "../components/Newsletter";
import Tickets from "../components/Tickets";
import TicketButton from "./pages/TicketButton";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="TicketButton" element={<TicketButton />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
