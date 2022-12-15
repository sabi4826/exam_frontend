import { animate, scroll } from "motion";
import MotionOne from "./style/motion.module.css";
// Progress bar representing gallery scroll
scroll(animate(".progress", { scaleX: [0, 1] }));

document.querySelectorAll("body").forEach((section) => {
  // const header = section.querySelector("h2");
  scroll(animate(header, { y: [-400, 400] }), {
    target: header,
  });
});
