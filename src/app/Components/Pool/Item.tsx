import React from "react";
import styles from "./Item.module.scss";
import Link from "next/link";
const Item = ({
  title,
  path,
  selected,
}: {
  title: string;
  path: string;
  selected: boolean;
}) => {
  return (
    <Link href={`/?category=${path}`}>
      <button
        className={`${styles.item} ${selected && styles.selected}`}
        name={title}
      >
        {title}
      </button>
    </Link>
  );
};

export default Item;
