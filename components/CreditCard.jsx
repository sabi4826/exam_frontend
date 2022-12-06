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
                <h3 className="">Credit card information</h3>
              </legend>

              <label className="" htmlFor="creditCardNumber">
                Insert your credit card number
              </label>
              <input className="" type="number" name="creditCardNumber" required placeholder="Credit Card Number" pattern="[0-9]{16}"></input>

              <label className="" htmlFor="creditCardMonth">
                Credit card month
              </label>
              <input className="" type="number" name="creditCardMonth" required placeholder="Month" pattern="[1-12]{2}"></input>

              <label className="" htmlFor="creditCardYear">
                Credit card year
              </label>
              <input className="" type="number" name="creditCardYear" required placeholder="Year" pattern="[1-12]{2}"></input>

              <label className="" htmlFor="creditCardCvc">
                CVC number
              </label>
              <input className="" type="number" name="CVC" required placeholder="CVC" pattern="[0-9]{2}"></input>
            </fieldset>
            <button className={bookingStyles.booking_ticket_button}>Complete payment</button>
          </form>
        )}
      </section>
    </div>
  );
}
