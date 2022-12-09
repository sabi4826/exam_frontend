import Tickets from "./Tickets";
import Camping from "./Camping";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import campingStyles from "../src/style/camping.module.css";
export default function TicketSection(props) {
  return (
    <>
      <article>
        <aside className={campingStyles.camping_heading}>
          <h4 className={campingStyles.camping_h4}>Camping spots</h4>
        </aside>
        <section className={campingStyles.camping_container}>
          {props.camping.map((camping) => (
            <Camping /* key={camping.area} */ response={camping} addToCart={props.addToCart} />
          ))}
        </section>
        <section className={bookingStyles.ticket_section}>
          {props.products.map((product) => (
            <Tickets key={product.id} data={product} addToCart={props.addToCart} />
          ))}
        </section>
      </article>
    </>
  );
}
