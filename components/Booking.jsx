import React from "react";
import { useState, useRef } from "react";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import CreditCard from "./CreditCard";
import insertOrder from "../modules/db";

export default function Booking(props) {
  const theForm = useRef(null);
  const [infoCompleted, setInfoCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,

      email: theForm.current.elements.email.value,

      phone: theForm.current.elements.phone.value,

      basket: props.cart,
    });
    console.log(response);
    setInfoCompleted(true);
  }
  return (
    <div className={bookingStyles.form_section}>
      <section className={bookingStyles.form_fields}>
        {infoCompleted ? (
          <CreditCard />
        ) : (
          <form method="post" onSubmit={submit} ref={theForm}>
            <fieldset className={bookingStyles.form_styling}>
              <legend>
                <h3 className={bookingStyles.h3_text}>Personal Information</h3>
              </legend>

              <label className={bookingStyles.label_text} htmlFor="name">
                Name:
              </label>
              <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>

              <label className={bookingStyles.label_text} htmlFor="phone">
                Phone:
              </label>
              <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.1234556"></input>

              <label className={bookingStyles.label_text} htmlFor="email">
                E-mail:
              </label>
              <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
            </fieldset>
            <button type="submit" className={bookingStyles.booking_ticket_button}>
              Go to payment
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
