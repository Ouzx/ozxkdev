import React from "react";
import { IconType } from "react-icons";
import styles from "./SocialButton.module.scss";

const SocialButton = ({
  Icon,
  link,
  userName,
  name,
}: {
  Icon: IconType;
  link: string;
  userName: string;
  name: string;
}) => {
  return (
    <a
      className={styles.social_button}
      aria-label={name}
      target="_blank"
      href={link}
    >
      <button className={styles.button} aria-label={name} name={userName}>
        <Icon size={28} />
      </button>
    </a>
  );
};

export default SocialButton;
