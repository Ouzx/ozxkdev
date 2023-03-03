import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = ({ message }: { message: string }) => {
  return (
    <div className={styles.notFoundText}>
      <h1>{message}</h1>
    </div>
  );
};

export default NotFound;
