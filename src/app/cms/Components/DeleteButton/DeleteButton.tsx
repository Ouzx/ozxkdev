import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./DeleteButton.module.scss";

const DeleteButton = ({ postId }: { postId: string }) => {
  return (
    <button className={styles.container}>
      <RxCrossCircled />
    </button>
  );
};

export default DeleteButton;
