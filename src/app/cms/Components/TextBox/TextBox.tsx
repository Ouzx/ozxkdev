import React from "react";
import styles from "./TextBox.module.scss";

const TextBox = ({
  title,
  data,
  onChange,
  required,
  tabIndex,
  autoFocus,
  autoComplete,
}: {
  title: string;
  data?: string;
  required?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  autoComplete?: boolean;
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
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        autoComplete={autoComplete ? "on" : "off"}
        // className={required ? styles.required : ""}
      />
    </div>
  );
};

export default TextBox;
