import React from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">ozxk.dev</a>
      </div>

      <div className={styles.nav}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
