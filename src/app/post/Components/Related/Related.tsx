import React from "react";
import Card from "./Card/Card";
import styles from "./Related.module.scss";
const Related = () => {
  return (
    <div className={styles.related}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Related;
