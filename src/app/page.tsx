import Hero from "./Components/Hero/Hero";
import MainContent from "./Components/MainContent/MainContent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MainContent />
    </main>
  );
}
