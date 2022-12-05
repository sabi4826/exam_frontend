import React from "react";
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";

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
    <div className={bookingStyles.booking_section}>
      <h3 className={bookingStyles.h3_text}>TICKETS</h3>
      <section className={bookingStyles.ticket_section}>
        <aside>
          <h4>REGULAR TICKETS</h4>
          <p>799,-</p>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>VIP TICKETS</h4>
          <p>1299,-</p>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>GREEN CAMPING</h4>
          <p>+249,-</p>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>2 PERSON TENT</h4>
          <p>299,-</p>
          <h5 className={bookingStyles.h5_text}>Fixed booking fee 99,-</h5>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>3 PERSON TENT</h4>
          <p>399,-</p>
          <h5 className={bookingStyles.h5_text}>Fixed booking fee 99,-</h5>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
        <aside>
          <h4>HAVE CREW SET UP YOUR TENT</h4>
          <p>FREE!!!</p>
          <form className={bookingStyles.quantity_form}>
            <input type="number" min="1" max="10" name="quantative" title="Qty" placeholder="Select" inputMode="numeric" id="Qty" />
            {/* <span className="remove-symbol" onClick={removeOne}>
              -
            </span>
            <span className="add-symbol" onClick={addOne}>
              {" "}
              +
            </span> */}
            <button className={bookingStyles.add_cart}>Add to Cart</button>
          </form>
        </aside>
      </section>
      <button className={bookingStyles.booking_ticket_button}>BUY TICKETS</button>

      <section className={bookingStyles.form_fields}>
        <form action="">
          <fieldset className={bookingStyles.form_styling}>
            <legend>
              <h3 className={bookingStyles.h3_text}>Personal Information</h3>
            </legend>
            <label className={bookingStyles.label_text} htmlFor="fullname">
              Name:
            </label>
            <input className={bookingStyles.input_text} type="text" name="Fullname" placeholder="Full Name"></input>
            <label className={bookingStyles.label_text} htmlFor="phone">
              Phone:
            </label>
            <input className={bookingStyles.input_text} type="number" name="Fullname" placeholder="ex.1234556"></input>
            <label className={bookingStyles.label_text} htmlFor="email">
              E-mail:
            </label>
            <input className={bookingStyles.input_text} type="text" name="Fullname" placeholder="name@mail.com"></input>
          </fieldset>
        </form>
      </section>
      <section className={bookingStyles.calc_text}>
        <h4>
          1 Regular Ticket <br />
          799,-
        </h4>
        <h4>
          2 Persons Tent (tent incl.)
          <br />
          299,-
        </h4>
        <h4>
          Fixed booking Fee <br />
          99,-
        </h4>
      </section>
    </div>
  );
}
