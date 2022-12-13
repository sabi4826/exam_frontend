import bookingStyles from "../src/style/booking.module.css";

function Tickets(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <>
      <article className={bookingStyles.articleSection}>
        <h4>{props.data.name}</h4>
        <p>{props.data.price}</p>

        {/* ATTEMPT AT MAKING LIMIT OF TICKETS: DROP DOWN. BUT INPUT, SO NEED NEW SUBMIT + ADD TO CART :(
        
        <label htmlFor="ticket_dropdown"></label>
        <select type="select" id="ticket_dropdown">
        <option value="">Choose tickets</option>
        <option value="1" submit={add}>1</option>
        <option value="2" submit={add}>2</option>
        <option value="3" submit={add}>3</option>
        <option value="4" submit={add}>4</option>
        <option value="5" submit={add}>5</option>
        </select> */}
        
        <button onClick={add} className={bookingStyles.add_cart}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default Tickets;
