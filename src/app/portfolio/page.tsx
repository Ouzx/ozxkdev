import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";

import heroBG from "@/assets/hero-bg.svg";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import Badges from "./Components/Badges/Badges";

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

          <div className={styles.row}>
            <a className={styles.button} href="#">
              <button>
                <span>Project Repo</span> <AiOutlineDownload />
              </button>
            </a>
            <a className={styles.button} href="#">
              <button>
                <span>Download Resume</span> <AiOutlineGithub />
              </button>
            </a>
          </div>
        </div>

        <div className={styles.main}>
          <h1>
            Hello, I'm <span className={styles.name}>Oğuz</span>
          </h1>
          <p className={styles.hello}>
            I am a recent graduate with a strong background in full stack web
            development. Proficient in a variety of technologies including
            JavaScript, React, Node.js and experienced in developing web
            applications with a focus on user experience. Strong problem-solving
            skills and ability to work in a team environment.
          </p>
          <div className={styles.seperator}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
