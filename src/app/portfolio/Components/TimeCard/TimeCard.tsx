import React from "react";
import styles from "./TimeCard.module.scss";

const TimeCard = ({
  date,
  title,
  company,
  description,
}: {
  date: string;
  title: string;
  company: string;
  description: string;
}) => {
  return (
    <div className={styles.timeElement}>
      <div className={styles.timeElement__date}>{date}</div>
      <div className={styles.timeElement__content}>
        <h4>{title}</h4>
        <h5>{company}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeCard;
