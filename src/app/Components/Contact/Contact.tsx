import React from "react";
import styles from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <form action="" method="post" about="contact">
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10} />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
