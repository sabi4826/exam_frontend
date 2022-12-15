import React from 'react';
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import insertOrder from "../modules/db";
import {useRef} from 'react';

export default function GuestInfo(props) {
    // new useRef for collecting info/data:
const extraTickets = useRef(null);
// make array for our return to map through: 
const guests = props.totalTickets - 1;
const guestsAsStrings = String.guests;
console.log("1guestsAsStrings", guestsAsStrings);
const guestsAsArray = guestsAsStrings.split();   // getting error on split?
console.log("2guestsAsArray", guestsAsArray);
const guestsAsArrayNumbers = guestsAsArray.map;
console.log("3guestsAsArrayNumbers", guestsAsArrayNumbers);

    // new submit function so they don't over lap, called handleClick. Still calling db.js function so Supabase can collect data:
    async function handleClick() {
        const response = await insertOrder({
          name: extraTickets.current.elements.name.value,
    
          email: extraTickets.current.elements.email.value,
    
          phone: extraTickets.current.elements.phone.value,
    
          // NEEDED? basket: props.cart,
        });        
      } 

  return (
    <>
        <h1>Guest Info</h1>
        <div ref={extraTickets} >   {/* className={bookingStyles.form_styling} */}
            {guestsAsArrayNumbers.map(()=> (
                <div key={i++}>
                    <h3>Guest {i + 1}</h3>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                    <button onClick={handleClick} className={bookingStyles.booking_extra_info_button}>Enter information</button>
                </div>
            ))}
        </div>
    </>
  )
}