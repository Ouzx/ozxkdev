import React from "react";
import styles from "./Item.module.scss";
import Link from "next/link";
const Item = ({
  title,
  path,
  selected,
  loading,
}: {
  title: string;
  path: string;
  selected: boolean;
  loading?: boolean;
}) => {
  return (
    <Link href={`/?category=${path}`}>
      <button
        className={`${styles.item} ${selected && styles.selected} ${
          loading && styles.loading
        }`}
        name={title}
      >
        {title}
      </button>
    </Link>
  );
};

export default Item;
