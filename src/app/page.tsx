import { use } from "react";
import Hero from "./Components/Hero/Hero";
import Pool from "./Components/Pool/Pool";
import PostList from "./Components/Post/PostList/PostList";
import styles from "./page.module.scss";
import { posts } from "@/lib/general";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams?.category;
  const pageIndex = searchParams?.page;

  let _category = category ? category : "all";
  let _pageIndex = pageIndex ? pageIndex : 1;

  if (Array.isArray(_category)) _category = _category[0];
  if (Array.isArray(_pageIndex)) _pageIndex = _pageIndex[0];

  const postList = use(posts(_category, +_pageIndex));
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        <Pool selected={searchParams?.category} />
        <PostList postList={postList} />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
