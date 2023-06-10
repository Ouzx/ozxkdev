import React from "react";
import { useDataContext } from "../../Context/DataContext";
import styles from "./Hello.module.scss";
const Hello = () => {
  const { HI, Description } = useDataContext();

  return (
    <>
      <p className={styles.hi}>
        Hello, I'm <span className={styles.name}>{HI}</span>
      </p>
      <p
        className={styles.hello}
        dangerouslySetInnerHTML={{ __html: Description || "" }}
      ></p>
    </>
  );
};

export default Hello;
