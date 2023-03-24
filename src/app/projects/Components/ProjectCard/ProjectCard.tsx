import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import ProjectButton from "../ProjectButton/ProjectButton";
import { iProject } from "@/types/Projects";
const ProjectCard = ({
  title,
  description,
  image,
  link,
  linkType,
}: iProject) => {
  return (
    <div className={styles.box}>
      <div className={styles.projectElement}>
        <div className={styles.projectElement__image}>
          <Image
            className={styles.img}
            src={image}
            alt=""
            width={480}
            height={480}
          />
        </div>
        <div className={styles.projectElement__content}>
          <h4>{title}</h4>
          <p>{description}</p>
          {link && linkType && <ProjectButton link={link} title={linkType} />}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
