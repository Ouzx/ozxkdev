"use client";
import Nav from "@/app/Components/Nav";
import React, { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.hamburger__menu}>
      <div
        className={`${styles.hamburger} ${isOpen && styles.active}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.hamburger__line}></div>
        <div className={styles.hamburger__line}></div>
        <div className={styles.hamburger__line}></div>
      </div>

      <div className={`${styles.menu} ${isOpen && styles.active}`}>
        <Nav />
      </div>
    </div>
  );
};

export default Hamburger;
