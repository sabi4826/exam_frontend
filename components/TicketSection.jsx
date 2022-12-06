import Tickets from "./Tickets";
// import CampingArea from "./CampingArea";

import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function TicketSection(props) {
  // console.log(props.products);
  return (
    <>
      {/* <h3 className={bookingStyles.h3_text}>TICKETS</h3> */}
      <div>
        <article>
          <section className={bookingStyles.ticket_section}>
            {props.products.map((product) => (
              <Tickets key={product.id} data={product} addToCart={props.addToCart} />
            ))}
          </section>

          <section className={bookingStyles.ticket_section}>
            <h4>Camping spots</h4>
            <p>Check out the avaliable camping spots here</p>
            {/* {props.campingSpots.map((spots) => (
              <CampingArea data={spots} addToCart={props.addToCart} />
            ))} */}
          </section>
        </article>
      </div>
    </>
  );
}
