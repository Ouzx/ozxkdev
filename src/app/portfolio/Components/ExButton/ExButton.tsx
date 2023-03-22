import React from "react";
import styles from "./ExButton.module.scss";
const ExButton = ({
  text,
  link,
  children,
}: {
  text: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={styles.button}
      rel="noopener noreferrer"
      href={link}
      target="_blank"
    >
      <button>
        <span>{text}</span> {children}
      </button>
    </a>
  );
};

export default ExButton;
