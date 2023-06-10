import React from "react";
import { useDataContext } from "../../Context/DataContext";
import HR from "../HR/HR";
import Title from "../Title/Title";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { BirthDate, Contact, Social } = useDataContext();
  return (
    <div className={styles.contact}>
      <Title title={"Contact"} />
      <HR />
      <div className={styles.line}>
        <p>Date of Birth</p>
        <p>{BirthDate}</p>
      </div>
      <div className={styles.line}>
        <p>Location</p>
        <p>{Contact?.address}</p>
      </div>
      <a href={`mailto:${Contact?.email}`} className={styles.line}>
        <p>E-mail</p>
        <p>{Contact?.email}</p>
      </a>
      <a href={`tel:${Contact?.phoneLink}`} className={styles.line}>
        <p>Phone</p>
        <p>{Contact?.phone}</p>
      </a>
      <HR />

      <div className={styles.print_link}>
        <a href={`${Social?.linkedin}`} className={styles.line}>
          <p>LinkedIn</p>
          <p>{Social?.linkedin}</p>
        </a>
        <a href={`${Social?.github}`} className={styles.line}>
          <p>Github</p>
          <p>{Social?.github}</p>
        </a>
      </div>
      <HR />

      <div className={styles.line}>
        <p>Availability</p>
        <p>{Contact?.availability}</p>
      </div>
    </div>
  );
};

export default Contact;
