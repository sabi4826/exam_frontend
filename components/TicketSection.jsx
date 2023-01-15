import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import campingStyles from "../src/style/camping.module.css";
import Tickets from "./Tickets";
import Camping from "./Camping";

export default function TicketSection(props) {
  return (
    <>
      <article>
        <div>
          <section className={bookingStyles.ticket_section}>
            {props.products.map((product) => (
              <Tickets key={product.id} data={product} addToCart={props.addToCart} />
            ))}
          </section>
          {/* <aside className={campingStyles.camping_heading}>
            <h3 className={campingStyles.camping_h3}>Camping Areas</h3>
            <p className={campingStyles.camping_p}>Please select one of these FooFest camping areas:</p>
          </aside> */}
          {/* <section className={campingStyles.camping_container}>
            {props.camping.map((camping) => (
              <Camping key={camping.area} response={camping} setReservationID={props.setReservationID} />
            ))}
          </section> */}
        </div>
      </article>
    </>
  );
}
