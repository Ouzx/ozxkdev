import React from "react";
import styles from "./TextBox.module.scss";

const TextBox = ({
  title,
  data,
  onChange,
}: {
  title: string;
  data?: string;
  onChange(val: string): void;
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={title}>{title}</label>
      <input
        type="text"
        name={title}
        id={title}
        onChange={(e) => onChange(e.target.value)}
        value={data}
      />
    </div>
  );
};

export default TextBox;
