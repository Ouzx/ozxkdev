import React from "react";
import Image from "next/image";
import styles from "./Resume.module.scss";

import pp from "../../../assets/PP.png";
const Resume = () => {
  return (
    <a
      href="https://portfolio.ozxk.dev"
      className={styles.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={pp} alt="picture" className={styles.pp} />
    </a>
  );
};

export default Resume;
