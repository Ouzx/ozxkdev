import React from "react";
import styles from "./HR.module.scss";
const HR = ({ half }: { half?: boolean }) => {
  return <div className={`${styles.seperator} ${half && styles.half}`}></div>;
};

export default HR;
