import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import banner from "@/assets/Banner.png";
import ProjectList from "./Components/ProjectList/ProjectList";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
    description: "A list of projects I have worked on.",
    openGraph: {
      title: "Projects",
      description: "A list of projects I have worked on.",
      url: `${process.env.NEXT_PUBLIC_URL}/projects`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/images/projects.jpg`,
          width: 800,
          height: 600,
          alt: "Projects",
        },
      ],
      siteName: "ozxk dev blog",
      locale: "en_US",
    },
  };
}

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Image className={styles.img} src={banner} alt="banner" />
      </div>
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
