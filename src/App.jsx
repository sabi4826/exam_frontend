import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Schedule from "../components/Schedule";
import Booking from "../components/Booking";
import Basket from "../components/Basket";
import TicketSection from "../components/TicketSection";

import bookingStyles from "../src/style/booking.module.css";
function App() {
  const [products, setProducts] = useState([]);
  const [camping, setCamping] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(data) {
    // console.log("addToCart", data);
    // do we have the ticket
    if (cart.find((entry) => entry.id === data.id || camping.area)) {
     /*  console.log("its there"); */
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id || camping.area) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
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
      
      fetch('http://localhost:8080/available-spots')
        .then(response => response.json())
        .then(response => {setCamping(response)})
        .catch(err => console.error(err));
      }
      fetchCamping();
  }
  );
 

  return (
    <div className="App">
      <Menu />
      <Header />
      <Schedule />

      <section className={bookingStyles.booking_section}>
        <TicketSection products={products} camping={camping} addToCart={addToCart} />
        <Basket products={products} camping={camping} cart={cart} removeFromCart={removeFromCart} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
