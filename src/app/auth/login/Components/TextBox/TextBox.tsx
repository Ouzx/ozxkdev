import React from "react";
import styles from "./TextBox.module.scss";
interface Props {
  id: string;
  label: string;
  type: string;
}

const TextBox = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<Props>
>((props, ref) => {
  return (
    <div className={styles.container}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} ref={ref} />
    </div>
  );
});
export default TextBox;
