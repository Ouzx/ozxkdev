import React from "react";
import styles from "./LoadIndicator.module.scss";
const LoadIndicator = () => {
  return (
    <div className={styles.container}>
      <h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </h2>
    </div>
  );
};

export default LoadIndicator;
