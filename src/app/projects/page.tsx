import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import banner from "@/assets/Banner.png";
import ProjectList from "./Components/ProjectList/ProjectList";

const page = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src={banner} alt="banner" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projects}>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default page;
