import React from "react";
import styles from "./Tag.module.scss";
const Tag = ({ value }: { value: string }) => {
  return <div className={styles.tag}>{value}</div>;
};

export default Tag;
