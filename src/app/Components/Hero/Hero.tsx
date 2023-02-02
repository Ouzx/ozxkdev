"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

import hero from "../../../assets/hero.jpg";
import Searchbar from "../Searchbar/Searchbar";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <Parallax translateY={[-300, 180]} className={styles.parallax}>
      <div className={styles.hero}>
        <Image className={styles.hero__image} alt="hero" src={hero} />
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>Blog</h1>
          <p className={styles.hero__subtitle}>A blog about web development</p>
          <Searchbar />
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
