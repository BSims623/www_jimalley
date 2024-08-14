'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '@/styles/components/ContactMe.module.scss';

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'ErEMFeVs-twp1r6im',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <h2 className={styles.title}>Send me an email</h2>
      <div className={styles.form_row}>
        <label htmlFor="user_name">Full Name</label>
        <input className={styles.input} type="text" name="user_name"  required/>
      </div>
      <div className={styles.form_row}>
        <label htmlFor="user_email">Your Email</label>
        <input className={styles.input} type="email" name='user_email'  required/>
      </div>
      <div className={styles.form_row}>
        <label htmlFor="message">Message</label>
        <textarea className={styles.text_area} name="message" required></textarea>
      </div>
      {/* <label>Name</label> */}
      {/* <input type="text" name="user_name" /> */}
      {/* <label>Email</label>
      <input type="email" name="user_email" /> */}
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <button className={`btn ${styles.btn}`} type="submit">Send</button>
    </form>
  );
};