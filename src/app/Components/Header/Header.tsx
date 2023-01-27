import React from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logo}>
          <a href="/">
            <h2>ozxk.dev</h2>
          </a>
        </div>

        <div className={styles.nav}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
