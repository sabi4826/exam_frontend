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

  function getTents() {
    let tents = 0;

    props.cart.forEach((tent) => {
      tents = tent.tent;
    });

    // console.log("tents are:", tents);
    return tents;
  }

  function getTickets() {
    let tickets = 0;

    props.cart.forEach((ticket) => {
      tickets = ticket.amount;
      if (ticket.amount >= 5) {
        alert("You can select maximum 5 tickets.");
      }
    });

    // console.log("ticket are:", tickets);
    return tickets;
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
        <p>Number of tickets: {getTickets()}</p>
        <p>Number of tent spots: {getTents()}</p>
        {!showForm && (
          <button onClick={() => setShowForm(true)} className={bookingStyles.booking_ticket_button}>
            BUY TICKETS
          </button>
        )}
        {showForm && <Booking reservationID={props.reservationID} />}
      </section>
    </article>
  );
}
