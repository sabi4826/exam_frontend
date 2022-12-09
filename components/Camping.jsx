import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";
//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {
  // console.log(props.response);
  function add() {
    props.addToCart(props.response);
  }

  return (
    <article>
      <h4 className={campingStyles.camping_h4}>{props.response.area}</h4>
      {/* <p className={campingStyles.camping_p}>Spots: {props.response.spots}</p> */}
      <p className={campingStyles.camping_p}>Available: {props.response.available}</p>

      <button onClick={add} className={bookingStyles.add_cart}>
        Add to Cart
      </button>
    </article>
  );
}
