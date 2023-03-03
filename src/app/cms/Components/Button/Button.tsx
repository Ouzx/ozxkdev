import React from "react";
import styles from "./Button.module.scss";
const Button = ({ title }: { title: string }) => {
  return (
    <input
      className={styles.container}
      type="submit"
      value={title}
      name={title}
      id={title}
    />
  );
};

export default Button;
