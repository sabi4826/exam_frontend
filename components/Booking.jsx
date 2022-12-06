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

      address: theForm.current.elements.address.value,

      basket: props.cart,
    });
    setInfoCompleted(true);
  }
  return (
    <div className={bookingStyles.booking_section}>
      <section className={bookingStyles.form_fields}>
        {infoCompleted ? (
          <CreditCard />
        ) : (
          <form onSubmit={submit} ref={theForm}>
            <fieldset className={bookingStyles.form_styling}>
              <legend>
                <h3 className={bookingStyles.h3_text}>Personal Information</h3>
              </legend>

              <label className={bookingStyles.label_text} htmlFor="fullname">
                Name:
              </label>
              <input className={bookingStyles.input_text} type="text" name="Fullname" required placeholder="Full Name"></input>

              <label className={bookingStyles.label_text} htmlFor="phone">
                Phone:
              </label>
              <input className={bookingStyles.input_text} type="number" name="Phone" required placeholder="ex.1234556"></input>

              <label className={bookingStyles.label_text} htmlFor="email">
                E-mail:
              </label>
              <input className={bookingStyles.input_text} type="email" name="Email" required placeholder="name@mail.com"></input>
            </fieldset>
            <button onClick={() => setInfoCompleted(true)}  className={bookingStyles.booking_ticket_button}>
              Go to payment
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
