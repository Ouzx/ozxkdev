import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import banner from "@/assets/Banner.png";
import ProjectList from "./Components/ProjectList/ProjectList";

import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

const page = () => {
  const meta = JSON.parse(JSON.stringify(NEXT_SEO_DEFAULT)) as NextSeoProps;

  if (meta) {
    meta.title = "Projects";
    meta.description = "A list of projects I have worked on.";

    if (meta.openGraph) {
      meta.openGraph.title = "Projects";
      meta.openGraph.description = "A list of projects I have worked on.";
      meta.openGraph.url = `${process.env.NEXT_PUBLIC_URL}/projects`;
    }
  }

  const updateMeta: NextSeoProps = meta;

  return (
    <div className={styles.container}>
      <NextSeo {...updateMeta} useAppDir={true} />
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
