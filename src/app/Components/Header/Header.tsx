import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <Logo />
        <div className={styles.nav}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
