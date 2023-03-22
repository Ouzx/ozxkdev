"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import { DataProvider } from "./Context/DataContext";

import heroBG from "@/assets/hero-bg.svg";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import Badges from "./Components/Badges/Badges";
import ExButton from "./Components/ExButton/ExButton";
import Hello from "./Components/Hello/Hello";
import HR from "./Components/HR/HR";
import ExButtons from "./Components/Fixed/ExButtons";
import Experience from "./Components/Fixed/Experience";

const page = () => {
  return (
    <DataProvider>
      <div className={styles.container}>
        <Image src={heroBG} alt="" className={styles.bg} />
        <div className={styles.content}>
          <div className={styles.side}>
            <div className={styles.row}>
              <Profile />
            </div>

            <div className={styles.row}>
              <Contact />
            </div>

            <div className={styles.row}>
              <Badges />
            </div>

            <div className={`${styles.row} ${styles.buttons}`}>
              <ExButtons />
            </div>
          </div>

          <div className={styles.main}>
            <Hello />

            <HR />

            <div className={styles.timeSection}>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </DataProvider>
  );
};

export default page;
