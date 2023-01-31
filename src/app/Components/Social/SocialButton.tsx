import React from "react";
import { IconType } from "react-icons";
import styles from "./SocialButton.module.scss";

const SocialButton = ({
  Icon,
  link,
  userName,
}: {
  Icon: IconType;
  link: string;
  userName: string;
}) => {
  return (
    <a className={styles.social_button} target="_blank" href={link}>
      <button className={styles.button} name={userName}>
        <Icon size={28} />
      </button>
    </a>
  );
};

export default SocialButton;
