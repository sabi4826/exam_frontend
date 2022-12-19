import campingStyles from "../src/style/camping.module.css";
//in App.jsx our fetched data is called response, so that is used everywhere with camping spots.

export default function Camping(props) {
  // PUT request for reservation of tickets, when the spot is added to basket:

  async function reserveSpot() {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ area: props.response.area, amount: 1 }),
    };

    fetch("http://localhost:8080/reserve-spot", options)
      .then((res) => res.json())
      .then((res) => props.setReservationID(res.id))
      // set reserveCamping to "response" here in the last "then"...
      .catch((err) => console.error(err));
  }

  // final POST reservation request put in the CreditCard.jsx

  return (
    <article>
      <h4 className={campingStyles.camping_h4}>{props.response.area}</h4>
      <p className={campingStyles.camping_p}>Spots: {props.response.spots}</p>
      <p className={campingStyles.camping_p}>Available: {props.response.available}</p>
      <input type="radio" name="camping" onClick={reserveSpot} alt="radio button - camping"></input>
    </article>
  );
}

// naming all radiobuttons the same makes them a group, and only one can be picked.
