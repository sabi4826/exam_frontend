import { useState } from "react";
import Booking from "./Booking";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function Basket(props) {
  const [showForm, setShowForm] = useState(false);
  const [showBasket, setBasket] = useState(false);

  function getTotal() {
    let total = 0;
    //     // make sure there's a "cart" somewhere:
    props.cart.forEach((item) => {
      total += item.amount * item.price;
      //     // do we have an item?
    });
    return total;
  }

  return (
    <article>
      <section className={bookingStyles.calc_text}>
        {props.cart.map((item) => (
          <h5 className={bookingStyles.h5_text} key={item.id}>
            {item.name} : {item.amount}, Price:{item.amount * item.price}
            <button className={bookingStyles.close_button} onClick={() => props.removeFromCart(item.name)}>
              X
            </button>
          </h5>
        ))}

        <h3>Total: {getTotal()},-</h3>
        {/* {!showBasket && <button onClick={() => setBasket(true)}>Buy now</button>} */}
        {/* {showBasket && <Booking cart={props.cart} />} */}
        {!showForm && (
          <button onClick={() => setShowForm(true)} className={bookingStyles.booking_ticket_button}>
            BUY TICKETS
          </button>
        )}
        {showForm && <Booking />}
      </section>
    </article>
    // Check: do/can we call each thing an "item"? Can we use "amount" and "price"? Can we use "name" instead of "id"?
  );
}
