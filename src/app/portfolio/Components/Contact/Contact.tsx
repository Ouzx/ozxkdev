import React from "react";
import HR from "../HR/HR";
import Title from "../Title/Title";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Title title={"INFO"} />
      <HR />
      <div className={styles.line}>
        <p>Date of Birth</p>
        <p>11 - 24 - 1999</p>
      </div>
      <div className={styles.line}>
        <p>Location</p>
        <p>Ankara, Turkey</p>
      </div>
      <a href="mailto:oguzhankandakoglu@gmail.com" className={styles.line}>
        <p>E-mail</p>
        <p>oguzhankandakoglu@gmail.com</p>
      </a>
      <a href="tel:+90546488984" className={styles.line}>
        <p>Phone</p>
        <p>(+90)-546-488-9884</p>
      </a>
    </div>
  );
};

export default Contact;
