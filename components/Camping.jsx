import bookingStyles from "../src/style/booking.module.css";

//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {
  function add() {
    props.addToCart(props.response);
  }
  return (
    <article>
      <h4>{props.response.area}</h4>
      <p>Spots: {props.response.spots}</p>
      <p>Available: {props.response.available}</p>
      <p>0,-</p>

      <button onClick={add} className={bookingStyles.add_cart}>
        Add to Cart
      </button>
    </article>
  );
}

