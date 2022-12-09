import React from "react";
/* import {insertOrder} from '../modules/db'; */
import { useState, useRef, useEffect } from "react";
import bookingStyles from "../src/style/booking.module.css";

export default function CreditCard(props) {
  const creditCardForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [finalCamping, setFinalCamping] = useState([]);

  // tried to make the focus jump automatically to the next field, but it's not working: 
/*   let input = document.querySelectorAll("input");
  input.forEach((el) => {

    el.addEventListener("input", (e) => {
      if (e.target.value.length === e.target.maxLength) {e.target.nextElementSibling.focus();}
    });
  }); */

  async function submit(e) {
    e.preventDefault();

    const response = await insertOrder({
      cardNumber: creditCardForm.elements.cardNumber.value,

      cardMonth: creditCardForm.elements.cardMonth.value,

      cardYear: creditCardForm.elements.cardYear.value,

      cvcNumber: creditCardForm.elements.cvcNumber.value,
    });
    if(response && response.length) {
      setPaymentCompleted(true);
      FinalSpotBooking(); // calling function to put POST request
  }
  }
  
  useEffect(() => {
    async function FinalSpotBooking() {
      const finalOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', prefer: 'return=representation'},
        body: '{"id":{options.id}}' // how do we reference the id?
      };
      
      fetch('http://localhost:8080/fullfill-reservation', finalOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        // set state setFinalCamping to "response" in last "then" after checked console.log!!!
        .catch(err => console.error(err));
      
    }
    FinalSpotBooking();
  })

  return (
    <div className="bookingStyles.creditSection">
      <section className="bookingStyles.creditFormFields">
        {paymentCompleted ? (
          <p>Thank you for your purchase! We look forward to seeing you at FooFest!</p>
          // should the function call for POST request be here, when the purchase is done??!! And then the function further up.
        ) : (
          <form onSubmit={submit} ref={creditCardForm}>
            <fieldset className="bookingStyles.creditFormStyling">
              <legend>
                <h3 className={bookingStyles.h3_text}>Credit card information</h3>
              </legend>

              <label className="" htmlFor="creditCardNumber">
                Insert your credit card number:
              </label>
              <input className="cardnumber" type="text" name="cardNumber" inputMode="numeric" placeholder="Credit Card Number" maxLength="16" pattern="[0-9]{16}" required></input>

              <label className="" htmlFor="creditCardMonth">
                Credit card month:
              </label>
              <input className="cardmonth" type="text" name="cardMonth" inputMode="numeric" placeholder="Month" maxLength="2" pattern="[0-1][0-9]" required></input>

              <label className="" htmlFor="creditCardYear">
                Credit card year:
              </label>
              <input className="cardyear" type="text" name="cardYear" inputMode="numeric" placeholder="Year" maxLength="2" pattern="2[2-9]" required></input>

              <label className="" htmlFor="creditCardCvc">
                CVC number:
              </label>
              <input className="cardsecurity" type="text" name="cardSecurity" inputMode="numeric" placeholder="CVC" maxLength="3" pattern="[0-9]{3}" required></input>
            </fieldset>
            <button className={bookingStyles.booking_ticket_button} onClick={() => setPaymentCompleted(true)}>Complete payment</button>
          </form>
        )}
      </section>
    </div>
  );
}
