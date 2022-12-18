import bookingStyles from "../src/style/booking.module.css";

function Tickets(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <>
      <article className={bookingStyles.articleSection}>
        <h4>{props.data.name}</h4>
        <p>{props.data.price},-</p>

        <button onClick={add} className={bookingStyles.add_cart}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default Tickets;
