import React from "react";
import Image from "next/image";
import styles from "./Resume.module.scss";

import pp from "../../../assets/PP.png";
import Link from "next/link";
const Resume = () => {
  return (
    <Link href="/resume" className={styles.resume} target="_blank">
      <Image src={pp} alt="picture" className={styles.pp} />
    </Link>
  );
};

export default Resume;
