import React from "react";
import "../src/style/menu.module.css";
import "../src/style/index.module.css";
import Logo from "../src/assets/musiclogo.svg";
export default function Menu() {
  return (
    <div className="navigation">
      <img src={Logo} className="logo" alt="logo" />
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

          <button className="buy-ticket-button">BUY TICKETS</button>
        </ul>
      </nav>
    </div>
  );
}
