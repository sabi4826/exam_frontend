import React from "react";
import "../src/style/header.css";
import "../src/style/index.css";

export default function Header() {
  return <div className="foo_header">
            <h3 className="header_h3">COPENHAGEN <br></br>JULY 7TH - JULY 16TH</h3>
            <h1 className="header_h1">FOO FEST 2023</h1>
            <button className="buy-ticket-header">BUY TICKETS!</button>  
  
  </div>;
}
