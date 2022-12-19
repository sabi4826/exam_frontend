import React from "react";
import { useState, useRef } from "react";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import insertOrder from "../modules/db";
import Step2InForm from "./Step2InForm";

export default function Booking(props) {
  const theForm = useRef(null);
  const [firstPersonalInfoCompleted, setFirstPersonalInfoCompleted] = useState(false);

  // saves data and POSTs to Supabase:
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,

      email: theForm.current.elements.email.value,

      phone: theForm.current.elements.phone.value,

      basket: props.cart,
    });
    setFirstPersonalInfoCompleted(true);
  }

  return (
    <>
      <div className={bookingStyles.form_section}>
        <section className={bookingStyles.form_fields}>
          {firstPersonalInfoCompleted ? (
            <Step2InForm totalTickets={props.totalTickets} reservationID={props.reservationID} />
          ) : (
            <form method="post" onSubmit={submit} ref={theForm}>
              <fieldset className={bookingStyles.form_styling}>
                <legend>
                  <h3 className={bookingStyles.h3_text}>Personal Information</h3>
                </legend>

                <label className={bookingStyles.label_text} htmlFor="name">
                  Name:
                </label>
                <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name" alt="full name"></input>

                <label className={bookingStyles.label_text} htmlFor="phone">
                  Phone:
                </label>
                <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556" alt="phone number"></input>

                <label className={bookingStyles.label_text} htmlFor="email">
                  E-mail:
                </label>
                <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com" alt="email"></input>
              </fieldset>
              <button type="submit" className={bookingStyles.booking_ticket_button}>
                Proceed
              </button>
            </form>
          )}
        </section>
      </div>
    </>
  );
}
