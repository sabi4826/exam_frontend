import React from "react";
import menuStyles from "../src/style/menu.module.css";
import "../src/style/index.module.css";
import Tickets from "./Tickets";

export default function Menu() {
  return (
    <div className={menuStyles.navigation}>
      <a href="index.html">
        <h2 className={menuStyles.logoText}>FooFest</h2>
      </a>
      <nav>
        <ul>
          <li>
            <a href="https://schedule-reaction.netlify.app/">SCHEDULE</a>
          </li>
          <li>
            <a href="#">ABOUT FOOFEST</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <button className={menuStyles.buyTicketButton}>BUY TICKETS</button>
        </ul>
      </nav>
    </div>
  );
}
