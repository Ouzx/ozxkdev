import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

import styles from "./ProjectButton.module.scss";
const ProjectButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className={styles.btn}>
        <button className={styles.projectButton}>
          {title === "Github" ? <AiFillGithub /> : <HiOutlineExternalLink />}
          <span>{title}</span>
        </button>
      </div>
      <div className={styles.link}>
        <span>
          {
            // return link without https:// and www.
            link.replace(/(^\w+:|^)\/\//, "").replace("www.", "")
          }
        </span>
      </div>
    </a>
  );
};

export default ProjectButton;
