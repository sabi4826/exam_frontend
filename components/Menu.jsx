import React from "react";
import menuStyles from "../src/style/menu.module.css";
import "../src/style/index.module.css";
import Tickets from "./Tickets";
<<<<<<< HEAD

import { Link } from "react-router-dom";
=======
>>>>>>> 250fee537190703dceac87e04d6b0d27dfe248d1

export default function Menu() {
  return (
    <div className={menuStyles.navigation}>
<<<<<<< HEAD
      <Link to="/">
=======
      <a href="index.html">
>>>>>>> 250fee537190703dceac87e04d6b0d27dfe248d1
        <h2 className={menuStyles.logoText}>FooFest</h2>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <li>
            <a href="https://schedule-reaction.netlify.app/">SCHEDULE</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <a href="BookingH2">
        <button className={menuStyles.buyTicketButton}>BUY TICKETS</button>
        </a>
      </nav>
    </div>
  );
}
