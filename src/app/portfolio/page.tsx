import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";

import heroBG from "@/assets/hero-bg.svg";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import Badges from "./Components/Badges/Badges";
import ExButton from "./Components/ExButton/ExButton";
import Hello from "./Components/Hello/Hello";
import HR from "./Components/HR/HR";
import TimeCard from "./Components/Card/TimeCard";

const page = () => {
  return (
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
            <ExButton text="Project Repo" link="#">
              <AiOutlineGithub />
            </ExButton>
            <ExButton text="Download Resume" link="#">
              <AiOutlineDownload />
            </ExButton>
          </div>
        </div>

        <div className={styles.main}>
          <Hello />

          <HR />

          <div className={styles.timeSection}>
            <h3>Work Experience</h3>
            <TimeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
