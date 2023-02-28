import React from "react";
import styles from "./Tags.module.scss";
import Tag from "./Tag";
const Tags = ({ tagList }: { tagList: string[] }) => {
  let tags = tagList?.map((tag) => {
    const key = Math.random() * 1000 + tag;
    return <Tag value={tag} key={key} />;
  });
  return <div className={styles.tags}>{tags}</div>;
};

export default Tags;
