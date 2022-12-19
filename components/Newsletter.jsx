import React from 'react'
import "../src/style/index.module.css";
import newletterStyles from "../src/style/newsletter.module.css";

export default function Newsletter() {
  return (
    <>
    <h2>Wanna keep up with the good news?</h2>
    <p>Sign up for our awesome newsletter to keep in touch with us at FooFest and get the latest news on artists, 
        events and the schedule!</p>
    <label htmlFor="newsletter_email">E-mail</label>
    <input type="email" name="newsletter_email" required placeholder="name@mail.com" alt="email"/>
    </>
  )
}
