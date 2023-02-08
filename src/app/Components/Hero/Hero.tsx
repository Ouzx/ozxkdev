import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

import hero from "../../../assets/hero_x2.jpg";
import Searchbar from "../Searchbar/Searchbar";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image className={styles.hero__image} alt="hero" src={hero} />
      <div className={styles.hero__text}>
        <h1 className={styles.hero__title}>Blog</h1>
        <p className={styles.hero__subtitle}>A blog about web development</p>
        <Searchbar />
      </div>
    </div>
  );
};

export default Hero;
