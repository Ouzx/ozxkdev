import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import Social from "../Social/Social";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <Logo />
          <Social className={styles.social} />
        </div>
        <blockquote>
          "Welcome to ozxk's blog, where I share my experiences as a full-stack
          web developer and document my projects. Whether you're a fellow
          developer or just interested in technology, this blog is a great
          resource for insights, tips, and tutorials. Join me on my journey as I
          delve into the world of code and explore the latest developments in
          full-stack web development. Come along for the ride!"
        </blockquote>
      </div>
    </div>
  );
};

export default Footer;
