import bookingStyles from "../src/style/booking.module.css";

function Tickets(props) {
  function add() {
    props.addToCart(props.data);
    // console.log((document.querySelectorAll("bookingStyles.add_cart").innerHTML = "Add More!"));
    document.querySelector("#added").innerHTML = "Add More!";
  }
  return (
    <>
      <article className={bookingStyles.articleSection}>
        <h4>{props.data.name}</h4>
        <p>{props.data.price},-</p>
        <button onClick={add} id="added" className={bookingStyles.add_cart}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default Tickets;
