import React from "react";
import headerStyle from "../src/style/header.module.css";
import "../src/style/index.module.css";

export default function Header() {
  return (
    <div className={headerStyle.foo_header}>
      <h3 className={headerStyle.header_h3}>
        COPENHAGEN <br></br>JULY 7TH - JULY 16TH
      </h3>
      <h1 className={headerStyle.header_h1}>FOO FEST 2023</h1>
      <button className={headerStyle.buyTicketHeader}>BUY TICKETS!</button>
    </div>
  );
}
