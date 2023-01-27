import Hero from "./Components/Hero/Hero";
import Pool from "@/Components/Pool/Pool";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        <Pool />
      </div>
    </main>
  );
}
