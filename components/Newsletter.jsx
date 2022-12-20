import React from "react";
import "../src/style/index.module.css";
import newsletterStyles from "../src/style/newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={newsletterStyles.newsletterBG}>
      <h2 className={newsletterStyles.header}>Wanna keep up with the good news?</h2>
      <p className={newsletterStyles.paragraf}>Sign up for our awesome newsletter to keep in touch with us at FooFest and get the latest news on artists, events and the schedule!</p>

      <fieldset className={newsletterStyles.letterForm}>
        <label htmlFor="newsletter_email" className={newsletterStyles.letterText}>
          E-mail
        </label>
        <input type="email" name="newsletter_email" required placeholder="name@mail.com" alt="email" className={newsletterStyles.formInput} />
        <button type="submit" className={newsletterStyles.inputButton}>
          Submit
        </button>
      </fieldset>
    </div>
  );
}
