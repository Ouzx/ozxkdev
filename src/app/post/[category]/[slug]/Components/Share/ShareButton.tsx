import React from "react";
import styles from "./ShareButton.module.scss";
const ShareButton = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <a rel="noopener noreferrer" href={link} className={styles.share_button}>
      {children}
    </a>
  );
};

export default ShareButton;
