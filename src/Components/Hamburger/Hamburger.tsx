"use client";
import React, { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      className={`${styles.hamburger} ${isOpen && styles.active}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
    </div>
  );
};

export default Hamburger;
