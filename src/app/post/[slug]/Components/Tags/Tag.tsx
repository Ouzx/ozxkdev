import React from "react";
import Link from "next/link";
import styles from "./Tag.module.scss";
const Tag = ({ value }: { value: string }) => {
  return (
    <Link href={`/`}>
      <div className={styles.tag}>{value}</div>
    </Link>
  );
};

export default Tag;
