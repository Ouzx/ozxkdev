import React from "react";
import { IconType } from "react-icons";
import styles from "./ShareButton.module.scss";
const ShareButton = ({ Icon, link }: { Icon: IconType; link: string }) => {
  return (
    <a href={link} className={styles.share_button}>
      <Icon />
    </a>
  );
};

export default ShareButton;
