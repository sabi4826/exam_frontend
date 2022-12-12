import React from "react";
import { useState, useRef } from "react";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import CreditCard from "./CreditCard";
import insertOrder from "../modules/db";
import Basket from "./Basket";

export default function Booking(props) {
  const theForm = useRef(null);
  const [infoCompleted, setInfoCompleted] = useState(false);
  let tents = 0;

  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,

      email: theForm.current.elements.email.value,

      phone: theForm.current.elements.phone.value,

      basket: props.cart,
    });
    console.log(response);
    
    // check for tents bought and matching with tickets: NOT WORKING YET
  /* if(props.cart.includes('Tent'))
    {
      if(data.id === "3" || "4") {
      props.cart.forEach((tent) => {
        tents = tent.amount;

        let tent = data.number >= props.cart.includes('ticket').amount;
      console.log("tent is:", tent);
      });
    }
    } else {
    setInfoCompleted(true);} */
  } 
  return (
    <>
      <div className={bookingStyles.form_section}>
        <section className={bookingStyles.form_fields}>
          {infoCompleted ? (
            <CreditCard reservationID={props.reservationID}/>
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
    </>
  );
}
