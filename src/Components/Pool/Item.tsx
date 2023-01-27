import React from "react";
import styles from "./Item.module.scss";
const Item = ({
  title,
  path,
  selected,
  onClick,
}: {
  title: string;
  path: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button className={styles.item} name={title} onClick={onClick}>
      {title}
    </button>
  );
};

export default Item;
