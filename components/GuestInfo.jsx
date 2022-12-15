import React from 'react';
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import Booking from "./Booking";
import submit from "./Booking";
import insertOrder from "../modules/db";
import {useRef} from 'react';

export default function GuestInfo(props) {

// new/same useRef for collecting info/data:
const formInfo = useRef(null);

// make array for number of guests: 
const guests = props.totalTickets - 1;
console.log("guests are", guests);
// to string and then make an array:
const guestsAsString = guests.toString();
const guestsAsArray = guestsAsString.split();  

    // new submit function so they don't over lap, called handleClick. Still calling db.js function so Supabase can collect data:
    // new table set up in supabase called foofest-info: NOT WORKING:
    async function handleInfo(e) {
        e.preventDefault(); 
        const response = await insertInfo({
        
          name: formInfo.current.elements.name.value,
    
          email: formInfo.current.elements.email.value,
    
          phone: formInfo.current.elements.phone.value,
    
          basket: props.cart,
        });        
      } 

  return (
    {/* <>
    {guestsAsArray.forEach((guest) => {
        <form method="post" onSubmit={handleInfo} ref={formInfo}>
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
              <button type="submit" className={bookingStyles.booking_extra_info_button}>Submit information</button>
            </form>
        }
    )
    }
    </> */}
  )
}


/* OLD CODE: */

{/* Old code from the screenshot etc */}

 {/* 
 <>
        <h1>Guest Info</h1>
        <div ref={formInfo}  className={bookingStyles.form_styling}>
            {guestsAsArray.map((guest)=> (
                <div key={guest++}> 
                    <h3>Guest {guest++}</h3>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                    <button onClick={handleInfo} className={bookingStyles.booking_extra_info_button}>Enter information</button>
                </div>  
            ))}
    </div>
    </>   
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

    {/*    
        )
      } */} 