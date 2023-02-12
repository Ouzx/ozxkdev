import React from "react";
import styles from "./TextBox.module.scss";

const TextBox = ({
  title,
  data,
  onChange,
  required,
}: {
  title: string;
  data?: string;
  required?: boolean;
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
        required={required}
        // className={required ? styles.required : ""}
      />
    </div>
  );
};

export default TextBox;
