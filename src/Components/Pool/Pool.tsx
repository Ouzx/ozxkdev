"use client";
import React, { useState } from "react";
import styles from "./Pool.module.scss";
import Item from "./Item";

const data = [
  "All",
  "Commercial",
  "Desing",
  "Nature",
  "People",
  "Technology",
  "Travel",
  "Wedding",
];

const Pool = () => {
  // TODO: add forwardRef or redux state
  const [selected, setSelected] = useState("All");
  console.log(selected);
  let items = data.map((item) => (
    <Item
      title={item}
      path={item}
      key={item}
      selected={selected === item}
      onClick={() => setSelected(item)}
    />
  ));

  return <div className={styles.pool}>{items}</div>;
};

export default Pool;
