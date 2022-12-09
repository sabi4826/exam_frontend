import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";
import { useState, useEffect } from "react";
//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {
  const [reserveCamping, setReserveCamping] = useState([]);

  function add() {
    // I think it makes sense to call the PUT request here, when the spots are added to basket:

    async function reserveSpot() {
      const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', prefer: 'return=id'},
        body: '{"area":{camping.area},"amount":{camping.amount}}' // do these references work???
      }; 
      console.log("returned id is:", id);
      console.log("area: {camping.area}", camping.area);
      
      fetch('http://localhost:8080/reserve-spot', options)
      .then(res => res.json())
      .then(res => console.log(res))
      // set reserveCamping to "response" here in the last "then"...
      .catch(err => console.error(err));
    }; 
    reserveSpots();
  };  
 
};

// final POST request put in the CreditCard.jsx

  return (
    <article>
      <h4 className={campingStyles.camping_h4}>{props.response.area}</h4>
      {/* <p className={campingStyles.camping_p}>Spots: {props.response.spots}</p> */}
      <p className={campingStyles.camping_p}>Available: {props.response.available}</p>
      <input type="radio" name="camping" onClick={add}></input>
      {/* <button onClick={add} className={bookingStyles.add_cart}>
        Add to Cart
      </button> */}
    </article>
  );
