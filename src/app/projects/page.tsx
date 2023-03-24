"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import banner from "@/assets/Banner.png";
import ProjectCard from "./Components/ProjectCard/ProjectCard";

const page = () => {
  const imgContainer = useRef<HTMLDivElement>(null);
  const projectsContainer = useRef<HTMLDivElement>(null);
  const pageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reSizeProjectsContainer = () => {
      const img = imgContainer.current?.querySelector("img");
      if (img && projectsContainer.current && pageContainer.current) {
        const imgWidth = img.width;
        const pageContainerWidth = pageContainer.current.offsetWidth;
        let projectsContainerWidth = pageContainerWidth - imgWidth;
        if (pageContainerWidth < 720) {
          projectsContainer.current.style.width = `90%`;
        } else if (pageContainerWidth < 1024) {
          projectsContainer.current.style.width = `70%`;
        } else {
          projectsContainer.current.style.width = `${projectsContainerWidth}px`;
        }
      }
    };
    reSizeProjectsContainer();
    window.addEventListener("resize", reSizeProjectsContainer);
  }, [imgContainer, projectsContainer, pageContainer]);

  return (
    <div className={styles.container} ref={pageContainer}>
      <div ref={imgContainer}>
        <Image className={styles.img} src={banner} alt="banner" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.projects} ref={projectsContainer}>
          <ProjectCard
            title="Project 1"
            description="In the last 4 years, I have developed 6-Live Wordpress websites for clients from several industries. I have developed websites for local businesses, e-commerce websites, and learning management systems. With these I have gained experience in SEO, caching policies, minifying and lazy but most important UI/UX."
            image="/wordpress.jpg"
            link="https://www.google.com"
            linkType="View"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
