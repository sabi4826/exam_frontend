import React from 'react';
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import Booking from "./Booking";
import submit from "./Booking";
import insertOrder from "../modules/db";
import {useRef} from 'react';

export default function GuestInfo(props) {

// new/same useRef for collecting info/data:
const theForm = useRef(null);

// make array for number of guests: 
const guests = props.totalTickets - 1;
console.log("guests are", guests);
// to string and then make an array:
const guestsAsString = guests.toString();
const guestsAsArray = guestsAsString.split();  

    // new submit function so they don't over lap, called handleClick. Still calling db.js function so Supabase can collect data:
    /* async function submit(e) {
        e.preventDefault(); 
        const response = await insertOrder({
        
          name: theForm.current.elements.name.value,
    
          email: theForm.current.elements.email.value,
    
          phone: theForm.current.elements.phone.value,
    
          basket: props.cart,
        });        
      }  */

  return (
    <>
        <h1>Guest Info</h1>
        <div ref={theForm}  className={bookingStyles.form_styling}>
            {guestsAsArray.map((guest)=> (
                <div key={guest++}> 
                    <h3>Guest {guest++}</h3>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                    {/* <button onClick={handleClick} className={bookingStyles.booking_extra_info_button}>Enter information</button> */}
                </div>  
            ))}
    </div>
    </>
  )
}


/* OLD CODE: */

{/* Old code from the screenshot etc */}

 {/*    
 */}

{/* <div ref={extraTickets}  className={bookingStyles.form_styling}>
            {guestsAsArray.map((guest)=> (
                <div key={guest++}> 
                    <h3>Guest {guest++}</h3>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                    <button onClick={handleClick} className={bookingStyles.booking_extra_info_button}>Enter information</button>
                </div>  
            ))}
        </div> */}

    {/*     <>
        {guestsAsArray.forEach((guest) => {
            <form method="post" onSubmit={submit} ref={theForm}>
                  <fieldset className={bookingStyles.form_styling}>
                    <legend>
                      <h3 className={bookingStyles.h3_text}>Guest Information</h3>
                    </legend>
    
                    <label className={bookingStyles.label_text} htmlFor="name">
                      Name:
                    </label>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
    
                    <label className={bookingStyles.label_text} htmlFor="phone">
                      Phone:
                    </label>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
    
                    <label className={bookingStyles.label_text} htmlFor="email">
                      E-mail:
                    </label>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                  </fieldset>
                </form>
            }
        )
        }
        </>
        )
      } */} 