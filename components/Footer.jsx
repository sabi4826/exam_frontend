import React from "react";
import footerStyles from "../src/style/footer.module.css";
import "../src/style/index.module.css";

import Instagram from "../src/assets/instagram.svg";
import Youtube from "../src/assets/youtube.svg";
import Facebook from "../src/assets/facebook.svg";

export default function Footer() {
  return (
    <div className={footerStyles.footer_content}>
      <div className={footerStyles.footer_headlines}>
        <h2 className={footerStyles.h2_header}>FooFest</h2>
        <p className={footerStyles.footer_text}>For camping inquiries, ticket purchases, and accessibility arrangements, please reach out to us at:</p>
      </div>

      <div className={footerStyles.footer_information}>
        <div className={footerStyles.contact}>
          <h3 className={footerStyles.headline_text}>Contact us</h3>
          <p className={footerStyles.footer_text}>
            Poppelgårdsvej 6, <br /> København K 1410
          </p>
          <p className={footerStyles.footer_text}>+45 45 62 83 90</p>
        </div>

        <div className={footerStyles.email}>
          <h3 className={footerStyles.headline_text}>Email us</h3>
          <p className={footerStyles.footer_text}>Hello@Foofest.com</p>
        </div>

        <div className={footerStyles.socials}>
          <h3 className={footerStyles.headline_text}>Socials</h3>

          <div className={footerStyles.footer_text} id={footerStyles.socials_logo}>
            <img src={Facebook} className={footerStyles.logos} alt="facebook" />
          </div>

          <div className={footerStyles.footer_text} id={footerStyles.socials_logo}>
            <img src={Youtube} className={footerStyles.logos} alt="youtube" />
          </div>

          <div className={footerStyles.footer_text} id={footerStyles.socials_logo}>
            <img src={Instagram} className={footerStyles.logos} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
