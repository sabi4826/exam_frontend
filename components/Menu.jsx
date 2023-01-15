import React from "react";
import menuStyles from "../src/style/menu.module.css";
import "../src/style/index.module.css";
import Tickets from "./Tickets";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={menuStyles.navigation}>
      <Link to="/">
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
        <Link to="/Ticketbutton">
          <button className={menuStyles.buyTicketButton}>BUY TICKETS</button>
        </Link>
      </nav>
    </div>
  );
}
