import React from "react";
import { useState, useRef } from "react";

import Booking from "./Booking";
import bookingStyles from "../src/style/booking.module.css";

export default function CreditCard(props) {
  const creditCardForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();

    const response = await insertOrder({
      cardNumber: creditCardForm.elements.cardNumber.value,

      cardMonth: creditCardForm.elements.cardMonth.value,

      cardYear: creditCardForm.elements.cardYear.value,

      cvcNumber: creditCardForm.elements.cvcNumber.value,
    });
    setPaymentCompleted(true);
  }

  return (
    <div className="bookingStyles.creditSection">
      <section className="bookingStyles.creditFormFields">
        {paymentCompleted ? (
          <p>Thank you for your purchase</p>
        ) : (
          <form onSubmit={submit} ref={creditCardForm}>
            <fieldset className="bookingStyles.creditFormStyling">
              <legend>
                <h3 className={bookingStyles.h3_text}>Credit card information</h3>
              </legend>

              <label className="" htmlFor="creditCardNumber">
                Insert your credit card number
              </label>
              <input className="cardnumber" type="text" name="cardNumber" inputMode="numeric" placeholder="Credit Card Number" maxlength="16" pattern="[0-9]{16}" required></input>

              <label className="" htmlFor="creditCardMonth">
                Credit card month
              </label>
              <input className="cardmonth" type="text" name="cardMonth" inputMode="numeric" placeholder="Month" maxlength="2" pattern="[0-1][0-9]" required></input>

              <label className="" htmlFor="creditCardYear">
                Credit card year
              </label>
              <input className="cardyear" type="text" name="cardYear" inputMode="numeric" placeholder="Year" maxlength="2" pattern="2[2-9]" required></input>

              <label className="" htmlFor="creditCardCvc">
                CVC number
              </label>
              <input className="cardsecurity" type="text" name="cardSecurity" inputMode="numeric" placeholder="CVC" maxlength="3" pattern="[0-9]{3}" required></input>
            </fieldset>
            <button className={bookingStyles.booking_ticket_button}>Complete payment</button>
          </form>
        )}
      </section>
    </div>
  );
}
