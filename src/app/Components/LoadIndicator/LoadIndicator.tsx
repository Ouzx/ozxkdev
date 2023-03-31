import React from "react";
import styles from "./LoadIndicator.module.scss";
const LoadIndicator = ({ containItself }: { containItself?: boolean }) => {
  return (
    <div
      className={`${styles.container} ${containItself && styles.containItself}`}
    >
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
