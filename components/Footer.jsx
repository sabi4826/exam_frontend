import React from "react";
import "../src/style/footer.css";
import "../src/style/index.css";

export default function Footer() {
  return (
    <div className="footer_content">
      <div className="footer_headlines">
        <h2>FooFest</h2>
        <p className="footer_text">For camping inquiries, ticket purchases, and accessibility arrangements, please reach out to us at:</p>
      </div>

      <div className="footer_information">
        <div className="contact">
          <h3>Contact us</h3>
          <p className="footer_text">
            Poppelgårdsvej 6, <br /> København K 1410
          </p>
          <p>+45 45 62 83 90</p>
        </div>

        <div className="email">
          <h3>Email us</h3>
          <p className="footer_text">Hello@Foofest.com</p>
        </div>

        <div className="socials">
          <h3>Socials</h3>
          <p className="footer_text">Facebook</p>
          <p className="footer_text">YouTube</p>
          <p className="footer_text">Instagram</p>
        </div>
      </div>
    </div>
  );
}
