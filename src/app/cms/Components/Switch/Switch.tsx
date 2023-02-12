import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({
  title,
  data,
  trueText,
  falseText,
  onChange,
}: {
  title: string;
  data?: boolean;
  trueText?: string;
  falseText?: string;
  onChange(val: boolean): void;
}) => {
  return (
    <div className={styles.switch}>
      <span>{title}</span>
      <div className={styles.wrapper}>
        <input
          id={title}
          type="checkbox"
          checked={data}
          readOnly
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <label htmlFor={title}>{data ? trueText : falseText}</label>
      </div>
    </div>
  );
};

export default Switch;
