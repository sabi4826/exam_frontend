import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";
import { useState, useEffect } from "react";
import fetchCamping from "../src/App";
//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {

    // I think it makes sense to call the PUT request here, when the spots are added to basket:

    async function reserveSpot() {
      const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"area":props.response.area,"amount":1}) 
      }; 
      
      fetch('http://localhost:8080/reserve-spot', options)
      .then(res => res.json())
      .then(res => props.setReservationID(res.id))
      // set reserveCamping to "response" here in the last "then"...
      .catch(err => console.error(err));
    };  

// final POST request put in the CreditCard.jsx

  return (
    <article>
      <h4 className={campingStyles.camping_h4}>{props.response.area}</h4>
      <p className={campingStyles.camping_p}>Spots: {props.response.spots}</p>
      <p className={campingStyles.camping_p}>Available: {props.response.available}</p>
      <input type="radio" name="camping" onClick={reserveSpot}></input>
    </article>
  );
};