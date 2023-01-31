import React from "react";
import styles from "./Tags.module.scss";
import Tag from "./Tag";
const Tags = () => {
  return (
    <div className={styles.tags}>
      <Tag value="girl" />
      <Tag value="lake" />
      <Tag value="swim" />
      <Tag value="blue" />
    </div>
  );
};

export default Tags;
