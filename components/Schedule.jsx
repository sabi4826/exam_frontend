import React from "react";
import scheduleStyle from "../src/style/schedule.module.css";
import "../src/style/index.module.css";
export default function Schedule() {
  return (
    <div className={scheduleStyle.scheduleSection}>
      <h2>CHECK OUT THE SCHEDULE HERE</h2>
      <h4>Are you wondering where the Schedule of festival located?</h4>
      <h4>Fret not!! Press the button below to see it</h4>
      <button className={scheduleStyle.scheduleButton}>CLICK HERE</button>
    </div>
  );
}
