import React from "react";
import { useState, useRef } from "react";
import bookingStyles from "../src/style/booking.module.css";

export default function CreditCard(props) {
  console.log(props.reservationID);
  const creditCardForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setPaymentCompleted(true);
    FinalSpotBooking(); // calling function to put POST request
  }

  async function FinalSpotBooking() {
    const finalOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.reservationID }),
    };

    fetch("https://exam2022-reaction.fly.dev/fullfill-reservation", finalOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <div className={bookingStyles.creditSection}>
      <section className={bookingStyles.creditFormFields}>
        {paymentCompleted ? (
          <section>
            <h3 className={bookingStyles.thankYou}>Thank you!</h3>
            <h5 className={bookingStyles.h5_text}>We send a confirmation e-mail to you :) </h5>
          </section>
        ) : (
          <form onSubmit={submit} ref={creditCardForm}>
            <fieldset className={bookingStyles.form_styling}>
              <legend>
                <h3 className={bookingStyles.h3_text}>Credit card information</h3>
              </legend>

              <label className={bookingStyles.label_text} htmlFor="creditCardNumber">
                Credit card number:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardNumber" inputMode="numeric" placeholder="Credit Card Number" maxLength="16" pattern="[0-9]{16}" alt="credit card number" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardMonth">
                Month:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardMonth" inputMode="numeric" placeholder="Month" maxLength="2" pattern="[0-1][0-9]" alt="credit card month" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardYear">
                Year:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardYear" inputMode="numeric" placeholder="Year" maxLength="2" pattern="2[2-9]" alt="credit card year" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardCvc">
                CVC number:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardSecurity" inputMode="numeric" placeholder="CVC" maxLength="3" pattern="[0-9]{3}" alt="credit card cvc" required></input>
            </fieldset>
            <button className={bookingStyles.booking_ticket_button}>Check Out</button>
          </form>
        )}
      </section>
    </div>
  );
}
