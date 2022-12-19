import bookingStyles from "../src/style/booking.module.css";

function Tickets(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <>
      <article className={bookingStyles.articleSection}>
        <h4 className={bookingStyles.h4_text}>{props.data.name}</h4>
        <p className={bookingStyles.p_text}>{props.data.price},-</p>
        <button onClick={add} className={bookingStyles.add_cart}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default Tickets;
