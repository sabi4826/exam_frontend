import { useState } from "react";
import Booking from "./Booking";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function Basket(props) {
  const [showForm, setShowForm] = useState(false);

  function getTotal() {
    let purchaseTotal = 0;
    let total = 0;

    props.cart.forEach((item) => {
      purchaseTotal += item.amount * item.price;
    });
    total = purchaseTotal + 99;
    return total;
  }

  return (
    <article>
      <section className={bookingStyles.calc_text}>
        {props.cart.map((item) => (
          <h5 className={bookingStyles.h5_text} key={item.id}>
            {item.name} : {item.amount}, Price: {item.amount * item.price}
            <button className={bookingStyles.close_button} onClick={() => props.removeFromCart(item.name)}>
              X
            </button>
          </h5>
        ))}
        <p className={bookingStyles.bookingFee}>Booking fee: 99,-</p>
        <h3>Total: {getTotal()},-</h3>
        {!showForm && (
          <button onClick={() => setShowForm(true)} className={bookingStyles.booking_ticket_button}>
            BUY TICKETS
          </button>
        )}
        {showForm && <Booking reservationID={props.reservationID}/>}
      </section>
    </article>
  );
}
