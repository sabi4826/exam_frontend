import { useState } from "react";
import Booking from "./Booking";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function Basket(props) {
  const [showForm, setShowForm] = useState(false);
  let tent2 = 0;
  let tent3 = 0;
  let tent2Spot = 0;
  let tent3Spot = 0;
  let totalTentSpots = 0;
  let totalTickets = 0;

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
    // find amount of tents in basket with amount and "tent"(2 or 3 spots) - return amount or 0:
    tent2 = props.cart.find((el) => el.id === "3")?.amount || 0; // set tent2 to amount of 2 pers. tents. If the amount is more than 0, * it with spots (2).
    if (tent2 > 0) {
      tent2Spot = tent2 * 2; // 2 = spots in each tent = total of spots
    }

    tent3 = props.cart.find((el) => el.id === "4")?.amount || 0;
    if (tent3 > 0) {
      tent3Spot = tent3 * 3; // 3 = spots in each tent
    }
    totalTentSpots = tent2Spot + tent3Spot;
    return totalTentSpots;
  }

  function getTickets() {
    // find amount of tickets in basket with "id" and amount - return amount or 0:
    const regular = props.cart.find((el) => el.id === "0")?.amount || 0;
    const vip = props.cart.find((el) => el.id === "1")?.amount || 0;

    totalTickets = regular + vip;

    if (totalTickets >= 5) {
      alert("You can select maximum 5 tickets.");
    }
    //  else if (regular >= 1) {
    //   alert("You have to select tents also!!");
    // }

    return totalTickets;
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
        <p className={bookingStyles.bookingFee}>Have you chosen your camping area?</p>
        <h3>Total: {getTotal()},-</h3>
        <p className={bookingStyles.hideBookingFee}>Number of tickets: {getTickets()}</p>
        <p className={bookingStyles.hideBookingFee}>Number of tent spots: {getTents()}</p>
        {!showForm && (
          // check for if tents bought and matching with tickets: 
          <button className={bookingStyles.booking_ticket_button} onClick={() => 
  {if(props.cart.find(el=>el.id==="3" || "4")) {
    if(totalTentSpots>=totalTickets)
  {setShowForm(true)}
  else {
    alert("Your amount of tent spots does not match the amount of tickets reserved. Please add one or more tents.");
   } } else {
    {setShowForm(true)}
   }}}>Reserve your tickets</button>
        )}
        {showForm && <Booking reservationID={props.reservationID} totalTickets={totalTickets} />}
      </section>
    </article>
  );
}
