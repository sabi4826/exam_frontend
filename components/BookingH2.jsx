import React from "react";
import bookingStyles from "../src/style/booking.module.css";
import Camping from "./Camping";
import campingStyles from "../src/style/camping.module.css";

export default function BookingH2(props) {
  return (
<<<<<<< HEAD
    <>
      <div className={bookingStyles.bookingH2_div}>
        <h2 className={bookingStyles.bookingH2}>Ticket Booking</h2>
        <h5 className={bookingStyles.h5_text}>IMPORTANT! You must select a camping area along with your ticket(s). Find available camping spots further down. It is only possible to buy a maximum of 5 tickets per purchase.</h5>
      </div>
      <aside className={campingStyles.camping_heading}>
        <h3 className={campingStyles.camping_h3}>Camping Areas</h3>
        <p className={campingStyles.camping_p}>Please select one of these FooFest camping areas:</p>
      </aside>
      <section className={campingStyles.camping_container}>
        {props.camping.map((camping) => (
          <Camping key={camping.area} response={camping} setReservationID={props.setReservationID} />
        ))}
      </section>
    </>
=======
    <div className={bookingStyles.bookingH2_div}>
      <h2 className={bookingStyles.bookingH2}>Ticket Booking</h2>
      <h5 className={bookingStyles.h5_text}>IMPORTANT! You must select a camping area along with your ticket(s). 
      Find available camping spots further down. It is only possible to buy a maximum of 5 tickets per purchase.</h5>
    </div>
>>>>>>> 250fee537190703dceac87e04d6b0d27dfe248d1
  );
}
