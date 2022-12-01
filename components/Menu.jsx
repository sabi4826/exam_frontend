import React from "react";
import "../src/style/menu.css";
export default function Menu() {
  return (
    <div className="navigation">
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
