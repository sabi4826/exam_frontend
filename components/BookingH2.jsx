import React from "react";
import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";

export default function BookingH2() {
  return (
    <div className={bookingStyles.bookingH2_div}>
      <h2 className={bookingStyles.bookingH2}>Ticket Booking</h2>
      <h5 className={bookingStyles.h5_text}>IMPORTANT! You must select a camping area along with your ticket(s). 
      Find available camping spots further down. It is only possible to buy a maximum of 5 tickets per purchase.</h5>
    </div>
  );
}
