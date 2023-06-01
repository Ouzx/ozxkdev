import { Metadata } from "next";
import Hero from "./Components/Hero/Hero";
import MainContent from "./Components/MainContent/MainContent";
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ozxk's Code Chronicles: A Dev Log",
    description: "Home",
    openGraph: {
      title: "Home",
      description:
        "Get an inside look at the world of software development through ozxk's eyes",
      url: `${process.env.NEXT_PUBLIC_URL}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "og-image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Ozx_K",
      title:
        "Get an inside look at the world of software development through ozxk's eyes",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "og-image",
        },
      ],
    },
    themeColor: "#47c9e5",
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MainContent />
    </main>
  );
}
