import React from 'react';
import {useState} from 'react';
import bookingStyles from "../src/style/booking.module.css";
import "../src/style/index.module.css";
import CreditCard from './CreditCard';

export default function GuestInfo(props) {

const [infoCompleted, setInfoCompleted] = useState(false);
// find number of guests and make array: 
const guests = props.totalTickets - 1;
const guestsAsArray = new Array(guests).fill(0);  

  return (

    <>
        <h3 className={bookingStyles.h3_text}>Guest Info</h3>
        <div className={bookingStyles.form_styling}>
            {guestsAsArray.map((guest, i)=> (
                <div key={i}> 
                    <h3>Guest {i+1}</h3>
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
                </div>  
            ))}
            <button className={bookingStyles.booking_extra_info_button} onClick={() =>{setInfoCompleted(true)}}>Go to payment</button>
            {infoCompleted && <CreditCard reservationID={props.reservationID}/>}
        </div>
        </> 
      )
}


/* OLD CODE: */

{/* Old code from the screenshot etc */}

{/* <h3 className={bookingStyles.h3_text}>Guest Info</h3>
        <div ref={formInfo}  className={bookingStyles.form_styling}>
            {guestsAsArray.map((guest, i)=> (
                <div key={i}> 
                    <h3>Guest {i+1}</h3>
                    <input className={bookingStyles.input_text} type="text" name="name" required placeholder="Full Name"></input>
                    <input className={bookingStyles.input_text} type="tel" inputMode="numeric" name="phone" required placeholder="ex.+451234556"></input>
                    <input className={bookingStyles.input_text} type="email" name="email" required placeholder="name@mail.com"></input>
                </div>  
            ))}
            <button onClick={handleInfo} className={bookingStyles.booking_extra_info_button}>Confirm information</button>
    </div> */}

 {/* 
   <>
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