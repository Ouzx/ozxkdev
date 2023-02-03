import React from "react";
import Button from "./Button";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import styles from "./NextPrev.module.scss";
const NextPrev = () => {
  return (
    <div className={styles.container}>
      <Button Icon={AiFillCaretLeft} text="Previous Post" />
      <Button Icon={AiFillCaretRight} text="Next Post" reverse />
    </div>
  );
};

export default NextPrev;
