"use client";
import Hero from "./Components/Hero/Hero";
import Pool from "@/Components/Pool/Pool";
import PostList from "@/Components/PostList/PostList";
import styles from "./page.module.scss";
import Contact from "./Components/Contact/Contact";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className={styles.main}>
        <Hero />
        <div className={styles.content}>
          <Pool />
          <PostList />
          {/* <Contact /> */}
        </div>
      </main>
    </ParallaxProvider>
  );
}
