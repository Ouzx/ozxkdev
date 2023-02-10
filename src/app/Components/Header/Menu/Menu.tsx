import Hamburger from "@/Components/Hamburger/Hamburger";
import React from "react";
import styles from "./Menu.module.scss";
import Nav from "../Nav";
import Social from "../../Social/Social";
import CMSMenu from "@/app/cms/Components/Menu/Menu";
const Menu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <Nav />
        <Social />
        <CMSMenu />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Menu;
