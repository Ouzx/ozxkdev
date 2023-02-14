"use client";
import React from "react";
import styles from "./Modal.module.scss";

interface Props {
  show: boolean;
  onYes: () => void;
  onNo: () => void;
  question: string;
  content: string;
}

const Modal = (props: Props) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div onClick={handleModalClick} className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_Content}>
          <p>{props.question}</p>
          <p>{props.content}</p>
          <div className={styles.buttons}>
            <button onClick={props.onYes}>Yes</button>
            <button onClick={props.onNo}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
