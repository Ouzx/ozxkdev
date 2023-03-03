import Hero from "./Components/Hero/Hero";
import Pool from "./Components/Pool/Pool";
import PostList from "./Components/Post/PostList/PostList";
import styles from "./page.module.scss";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        <Pool selected={searchParams?.category} />
        <PostList
          category={searchParams?.category}
          pageIndex={searchParams?.page}
        />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
