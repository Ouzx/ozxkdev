import React from "react";
import { useDataContext } from "../../Context/DataContext";
import styles from "./Hello.module.scss";
const Hello = () => {
  const { HI, Description } = useDataContext();

  return (
    <>
      <h1>
        Hello, I'm <span className={styles.name}>{HI}</span>
      </h1>
      <p className={styles.hello}>{Description}</p>
    </>
  );
};

export default Hello;
