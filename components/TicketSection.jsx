import Tickets from "./Tickets";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

export default function TicketSection(props) {
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
          
          <section className={bookingStyles.camping_section}> {/* made new className */}
            <h4>Camping spots</h4>
            <p>Check out the available camping spots here</p>
         {/* {O(Camping.response)((spots) => (
              <Camping response={spots} addToCart={props.addToCart} />
            ))}  */}
          {/*   <Camping /> */}
          </section>
        </article>
      </div>
    </>
  );
}
