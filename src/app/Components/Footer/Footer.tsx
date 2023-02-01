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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minus corrupti sint, illum incidunt dolorem quaerat sunt tenetur,
          perspiciatis enim alias porro consectetur ducimus voluptate in fugiat
          vel, soluta modi!
        </p>
      </div>
    </div>
  );
};

export default Footer;
