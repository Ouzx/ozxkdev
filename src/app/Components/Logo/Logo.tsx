import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      <h2>ozxk.dev</h2>
    </Link>
  );
};

export default Logo;
