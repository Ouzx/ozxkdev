import React from "react";
import styles from "./Pool.module.scss";
import Item from "./Item";
import { categories } from "@/lib/general";

const Pool = async ({
  selected,
}: {
  selected: string | null | undefined | string[];
}) => {
  const selection = selected || "All";
  const data = ["All", ...(await categories())];
  let items = data.map((item) => (
    <Item title={item} path={item} key={item} selected={selection === item} />
  ));

  return <div className={styles.pool}>{items}</div>;
};

export default Pool;
