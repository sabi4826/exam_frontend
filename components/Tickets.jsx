import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";

function Tickets(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <>
      <article className={bookingStyles.articleSection}>
        <h4 className={bookingStyles.h4_text}>{props.data.name}</h4>
        <h4 className={bookingStyles.h4_text}>{props.data.type}</h4>
        <p className={campingStyles.camping_p}>{props.data.info}</p>
        <p className={bookingStyles.p_text}>{props.data.price},-</p>
        <button onClick={add} className={bookingStyles.add_cart}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default Tickets;
