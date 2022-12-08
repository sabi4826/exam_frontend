import { useState } from "react";
import Booking from "./Booking";
import App from "../src/App";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function CampingBasket(props) {
  console.log(props);

  return (
    <article>
      <section className={bookingStyles.calc_text}>
        {props.cart.map((campingItem) => (
          <h5 className={bookingStyles.h5_text} key={campingItem.area}>
            {campingItem.area} : {campingItem.amount}, Availability: {campingItem.available}
            <button className={bookingStyles.close_button} onClick={() => props.removeFromCart(campingItem.area)}>
              X
            </button>
          </h5>
        ))}
      </section>
    </article>
  );
}
