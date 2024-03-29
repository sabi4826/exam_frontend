import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuStyles from "../style/menu.module.css";
import bookingStyles from "../style/booking.module.css";
import TicketSection from "../../components/TicketSection";
import Basket from "../../components/Basket";
import BookingH2 from "../../components/BookingH2";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const TicketButton = () => {
  const [products, setProducts] = useState([]);
  const [camping, setCamping] = useState([]);
  const [cart, setCart] = useState([]);
  const [reservationID, setReservationID] = useState(null);

  function addToCart(data) {
    // console.log("addToCart", data);
    // do we have the ticket
    if (cart.find((entry) => entry.id === data.id)) {
      /*  camping.area removed */
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };

          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    }
    // else if (data.id >= 5) {
    //   console.log("atready 5");
    // }
    else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }

  function removeFromCart(id) {
    console.log("removing", id);
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        console.log(item.id);
        if (item.name === id) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      });
      // console.log(subtracted);
      const filtered = subtracted.filter((item) => item.amount > 0);

      return filtered;
    });
  }

  useEffect(() => {
    // fetch tickets from local json file:
    async function getData() {
      const res = await fetch("ticketsPrice.json");
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    }
    getData();

    // all fetching in same useEffect, we can only have one

    // fetch camping available spots:
    async function fetchCamping() {
      fetch("https://exam2022-reaction.fly.dev/available-spots")
        .then((response) => response.json())
        .then((response) => {
          setCamping(response);
        })
        .catch((err) => console.error(err));
    }
    fetchCamping();
  }, []);

  return (
    <div>
      <Menu />
      <BookingH2 products={products} camping={camping} addToCart={addToCart} setReservationID={setReservationID} />
      <section className={bookingStyles.booking_container}>
        <TicketSection products={products} camping={camping} addToCart={addToCart} setReservationID={setReservationID} />
        <Basket products={products} reservationID={reservationID} cart={cart} removeFromCart={removeFromCart} />
      </section>
      <Footer />
    </div>
  );
};
export default TicketButton;
