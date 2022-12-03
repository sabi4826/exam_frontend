import React from "react";
import "../src/style/footer.module.css";
import "../src/style/index.module.css";

import Instagram from "../src/assets/instagram.svg";
import Youtube from "../src/assets/youtube.svg";
import Facebook from "../src/assets/facebook.svg";

export default function Footer() {
  return (
    <div className="footer_content">
      <div className="footer_headlines">
        <h2>FooFest</h2>
        <p className="footer_text">For camping inquiries, ticket purchases, and accessibility arrangements, please reach out to us at:</p>
      </div>

      <div className="footer_information">
        <div className="contact">
          <h3 className="headline_text">Contact us</h3>
          <p className="footer_text">
            Poppelgårdsvej 6, <br /> København K 1410
          </p>
          <p className="footer_text">+45 45 62 83 90</p>
        </div>

        <div className="email">
          <h3 className="headline_text">Email us</h3>
          <p className="footer_text">Hello@Foofest.com</p>
        </div>

        <div className="socials">
          <h3 className="headline_text">Socials</h3>

          <div className="footer_text" id="socials_logo">
            <img src={Facebook} className="logos" alt="facebook" />
          </div>

          <div className="footer_text" id="socials_logo">
            <img src={Youtube} className="logos" alt="youtube" />
          </div>

          <div className="footer_text" id="socials_logo">
            <img src={Instagram} className="logos" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
