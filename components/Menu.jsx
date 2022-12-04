import React from "react";
import menuStyles from "../src/style/menu.module.css";
import "../src/style/index.module.css";

export default function Menu() {
  return (
    <div className={menuStyles.navigation}>
      {/* <img src={Logo} className="logo" alt="logo" /> */}
      <h2 className={menuStyles.logoText}>FooFest</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">About FooFest</a>
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
