import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";
import { useState, useEffect } from "react";
//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {
const [reserveCamping, setReserveCamping] = useState([]);

  function add() {
    props.addToCart(props.response);
    // I think it makes sense to call the PUT request here, when the spots are added to basket:
    /* reserveSpots(); */
  }

  /* useEffect(() => {
    async function reserveSpots() {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', prefer: 'return=id'},
      body: '{"area":{props.response.area},"amount":{props.response.amount}}' // do these references work???
    };

    fetch('http://localhost:8080/reserve-spot', options)
  .then(response => response.json())
  .then(response => console.log(response))
  // set reserveCamping to "response" here in the last "then"...
  .catch(err => console.error(err));
} */

// final POST request put in the CreditCard.jsx

return (
    <article>
      <h4 className={campingStyles.camping_h4}>{props.response.area}</h4>
      <p className={campingStyles.camping_p}>Spots: {props.response.spots}</p>
      <p className={campingStyles.camping_p}>Available: {props.response.available}</p>
      <p>0,-</p>

      <button onClick={add} className={bookingStyles.add_cart}>
        Add to Cart
      </button>
    </article>
  );
}
