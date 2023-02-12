import React from "react";
import styles from "./Button.module.scss";
const Button = ({ title, onClick }: { title: string; onClick(): void }) => {
  return (
    <input
      className={styles.container}
      type="button"
      value={title}
      name={title}
      id={title}
      onClick={() => onClick()}
    />
  );
};

export default Button;
