import React from "react";
import HR from "../HR/HR";
import Title from "../Title/Title";
import styles from "./Badges.module.scss";

import badges from "./badgeList";

const Section = ({
  title,
  start,
  end,
}: {
  title: string;
  start: number;
  end: number;
}) => {
  return (
    <>
      <Title title={title} />
      <HR />
      <div className={styles.tags}>
        {badges.slice(start, end).map((badge) => {
          return badge;
        })}
      </div>
    </>
  );
};

export default Section;
