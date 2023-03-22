import React from "react";
import styles from "./TimeCard.module.scss";

const TimeCard = () => {
  return (
    <div className={styles.timeElement}>
      <div className={styles.timeElement__date}>
        <span>2020</span>/<span>2021</span>
      </div>
      <div className={styles.timeElement__content}>
        <h4>Full Stack Developer</h4>
        <h5>Company Name</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, quae.
        </p>
      </div>
    </div>
  );
};

export default TimeCard;
