import React from "react";
import { useState } from "react";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import CreditCard from "./CreditCard";

export default function GuestInfo(props) {
  const [infoCompleted, setInfoCompleted] = useState(false);
  // find number of guests and make array:
  const guests = props.totalTickets - 1;
  const guestsAsArray = new Array(guests).fill(0);

  return (
    <>
      <h3 className={bookingStyles.h3_text}>Guest Info</h3>
      <div>
        {guestsAsArray.map((guest, i) => (
          <div key={i}>
            <h4 className={bookingStyles.h4_text}>Guest {i + 1}</h4>
            <section className={bookingStyles.form_styling}>
              <label className={bookingStyles.label_text} htmlFor="name">
                Name:
              </label>
              <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>

              <label className={bookingStyles.label_text} htmlFor="phone">
                Phone:
              </label>
              <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>

              <label className={bookingStyles.label_text} htmlFor="email">
                E-mail:
              </label>

              <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
            </section>
          </div>
        ))}{" "}
      </div>
      <button
        className={bookingStyles.booking_ticket_button}
        onClick={() => {
          setInfoCompleted(true);
        }}
      >
        Go to payment
      </button>
      {infoCompleted && <CreditCard reservationID={props.reservationID} />}
    </>
  );
}
