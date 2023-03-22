import React from "react";
import styles from "./Hello.module.scss";
const Hello = () => {
  return (
    <>
      <h1>
        Hello, I'm <span className={styles.name}>Oğuz</span>
      </h1>
      <p className={styles.hello}>
        I am a recent graduate with a strong background in full stack web
        development. Proficient in a variety of technologies including
        JavaScript, React, Node.js and experienced in developing web
        applications with a focus on user experience. Strong problem-solving
        skills and ability to work in a team environment.
      </p>
    </>
  );
};

export default Hello;
