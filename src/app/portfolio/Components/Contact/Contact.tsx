import React from "react";
import { useDataContext } from "../../Context/DataContext";
import HR from "../HR/HR";
import Title from "../Title/Title";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { BirthDate, Contact } = useDataContext();
  return (
    <div className={styles.contact}>
      <Title title={"INFO"} />
      <HR />
      <div className={styles.line}>
        <p>Date of Birth</p>
        <p>{BirthDate}</p>
      </div>
      <div className={styles.line}>
        <p>Location</p>
        <p>{Contact?.address}</p>
      </div>
      <a href="mailto:oguzhankandakoglu@gmail.com" className={styles.line}>
        <p>E-mail</p>
        <p>{Contact?.email}</p>
      </a>
      <a href="tel:+90546488984" className={styles.line}>
        <p>Phone</p>
        <p>{Contact?.phone}</p>
      </a>
    </div>
  );
};

export default Contact;
