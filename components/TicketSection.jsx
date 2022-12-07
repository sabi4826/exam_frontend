import Tickets from "./Tickets";
import Camping from "./Camping";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function TicketSection(props) {
  return (
    <>
        <article>
          <section className={bookingStyles.ticket_section}>
            {props.products.map((product) => (
              <Tickets key={product.id} data={product} addToCart={props.addToCart} />
            ))}
          </section>
          
          <section className={bookingStyles.ticket_section}>
            <h4>Camping spots</h4>
            <p>Only choose one area per booking!</p>
            {props.camping.map((camping) => (
              <Camping key={camping.area} response={camping} addToCart={props.addToCart} />
            ))}
          </section>
        </article>
    </>
  );
}
