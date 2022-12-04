import React from "react";
import "../src/style/booking.css";
import "../src/style/index.css";

export default function Booking() {
  //   function removeOne() {
  //     const removeSymbol = document.querySelector(".remove-symbol");
  //     console.log(removeSymbol);
  //   }
  //   function addOne() {
  //     const addSymbol = document.querySelector(".add-symbol");
  //     console.log(addSymbol);
  //   }
  return (
    <div className="booking-section">
      <h3>TICKETS</h3>
      <section className="ticket-section">
        <aside>
          <h4>REGULAR TICKETS</h4>
          <p>799,-</p>
          <form className="quantity-form">
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className="add-cart">Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>VIP TICKETS</h4>
          <p>1299,-</p>
          <form className="quantity-form">
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className="add-cart">Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>GREEN CAMPING</h4>
          <p>+249,-</p>
          <form className="quantity-form">
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className="add-cart">Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>2 PERSON TENT</h4>
          <p>299,-</p>
          <h5 className="h5-text">Fixed booking fee 99,-</h5>
          <form className="quantity-form">
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className="add-cart">Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>3 PERSON TENT</h4>
          <p>399,-</p>
          <h5 className="h5-text">Fixed booking fee 99,-</h5>
          <form className="quantity-form">
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className="add-cart">Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>HAVE CREW SET UP YOUR TENT</h4>
        </aside>
      </section>
      <button className="booking-ticket-button">BUY TICKETS</button>
      <section className="form_fields">
        <form action="">
          <fieldset className="form_styling">
            <legend>
              <h3>Personal Information</h3>
            </legend>
            <label htmlFor="fullname">Name:</label>
            <input type="text" name="Fullname" placeholder="Full Name"></input>
            <label htmlFor="phone">Phone:</label>
            <input type="number" name="Fullname" placeholder="ex.1234556"></input>
            <label htmlFor="email">E-mail:</label>
            <input type="text" name="Fullname" placeholder="name@mail.com"></input>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
