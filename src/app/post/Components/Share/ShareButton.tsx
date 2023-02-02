import React from "react";
import { IconType } from "react-icons";
import styles from "./ShareButton.module.scss";
const ShareButton = ({ Icon, link }: { Icon: IconType; link: string }) => {
  return (
    <div className={styles.share_button}>
      <Icon />
    </div>
  );
};

export default ShareButton;
