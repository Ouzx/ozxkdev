import Hamburger from "@/Components/Hamburger/Hamburger";
import React from "react";
import styles from "./Menu.module.scss";
import Nav from "./Nav";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Nav />
      <Hamburger />
    </nav>
  );
};

export default Menu;
