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
  const [cart, setCart] = useState([]);

  function addToCart(data) {
    // console.log("addToCart", data);
    // do we have the ticket
    if (cart.find((entry) => entry.id === data.id)) {
      // console.log("its there");
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
    async function getData() {
      const res = await fetch("ticketsPrice.json");
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Menu />
      <Header />
      <Schedule />

      <section className={bookingStyles.booking_section}>
        <TicketSection products={products} addToCart={addToCart} />
        <Basket products={products} cart={cart} removeFromCart={removeFromCart} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
