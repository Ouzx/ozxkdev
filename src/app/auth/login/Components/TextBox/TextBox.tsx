"use client";
import React, { useState } from "react";
import styles from "./TextBox.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props {
  id: string;
  label: string;
  type: string;
  onOff?: boolean;
  required?: boolean;
}

const TextBox = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<Props>
>((props, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className={styles.text}>
        <input
          type={show ? "text" : props.type}
          id={props.id}
          ref={ref}
          required={props.required}
        />
        {props.onOff && (
          <div className={styles.icon} onClick={() => setShow(!show)}>
            {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        )}
      </div>
    </div>
  );
});
export default TextBox;
