"use client";
import React, { useState, useEffect, useRef } from "react";
import Nav from "@/app/Components/Header/Nav";
import Social from "@/app/Components/Social/Social";
import styles from "./Hamburger.module.scss";
import CMSMenu from "@/app/cms/Components/Menu/Menu";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window === undefined) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, window]);

  // If user clicks on a link, close the menu
  useEffect(() => {
    if (window === undefined) return;
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpen(false);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          setIsOpen(false);
        });
      });
    };
  }, [window]);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.hamburger__menu} ref={menuRef}>
      <div
        className={`${styles.hamburger} ${isOpen && styles.active}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.hamburger__line}></div>
        <div className={styles.hamburger__line}></div>
        <div className={styles.hamburger__line}></div>
      </div>

      <div className={`${styles.menu} ${isOpen && styles.active}`}>
        <div className={styles.social}>
          <Social />
        </div>
        <CMSMenu />
        <Nav />
      </div>
    </div>
  );
};

export default Hamburger;
