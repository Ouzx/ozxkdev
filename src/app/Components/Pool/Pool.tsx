import React from "react";
import styles from "./Pool.module.scss";
import Item from "./Item";

const getCategories = async () => {
  return await fetch(process.env.API + "/categories")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [""];
    });
};

const Pool = async ({
  selected,
}: {
  selected: string | null | undefined | string[];
}) => {
  const selection = selected || "All";
  const categories = await getCategories();
  const data = ["All", ...categories];

  let items = data.map((item) => (
    <Item title={item} path={item} key={item} selected={selection === item} />
  ));

  return <div className={styles.pool}>{items}</div>;
};

export default Pool;
