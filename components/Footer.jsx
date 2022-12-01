import React from "react";
import "../src/style/footer.css";

export default function Footer() {
  return (
    <div className="footer_content">
      <h2>FooFest</h2>
      <p>For camping inquiries, ticket purchases, and accessibility arrangements, please reach out to us at:</p>

      <div class="footer_information">
        <div className="contact">
          <h3>Contact us</h3>
          <p>
            POPPELGÅRDSVEJ 6, <br /> KØBENHAVN K 1410
          </p>
          <p>+45 45 62 83 90</p>
        </div>

        <div className="email">
          <h3>Email us</h3>
          <p>HELLO@FOOFEST.COM</p>
        </div>

        <div className="socials">
          <h3>Socials</h3>
          <p>Facebook</p>
          <p>YouTube</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}
