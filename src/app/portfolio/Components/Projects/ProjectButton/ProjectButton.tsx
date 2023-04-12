import React from "react";
import { AiFillGithub } from "react-icons/ai";
import styles from "./ProjectButton.module.scss";
const ProjectButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className={styles.btn}>
        <button className={styles.projectButton}>
          <AiFillGithub />
          <span>{title}</span>
        </button>
      </div>
      <div className={styles.link}>
        <span>{link}</span>
      </div>
    </a>
  );
};

export default ProjectButton;
