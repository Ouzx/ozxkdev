import React from "react";
import styles from "./TimeCard.module.scss";

const TimeCard = ({
  startDate,
  endDate,
  title,
  company,
  description,
}: {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
}) => {
  return (
    <div className={styles.timeElement}>
      <div className={styles.timeElement__date}>
        <span>{startDate}</span>/<span>{endDate}</span>
      </div>
      <div className={styles.timeElement__content}>
        <h4>{title}</h4>
        <h5>{company}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeCard;
