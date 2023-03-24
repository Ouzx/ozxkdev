import React from "react";
import styles from "./SocialButton.module.scss";

const SocialButton = ({
  link,
  userName,
  name,
  children,
}: {
  link: string;
  userName: string;
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={styles.social_button}
      aria-label={name}
      rel="noopener noreferrer"
      target="_blank"
      href={link}
    >
      <button className={styles.button} aria-label={name} name={userName}>
        {children}
      </button>
    </a>
  );
};

export default SocialButton;
