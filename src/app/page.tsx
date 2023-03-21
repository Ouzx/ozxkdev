import { Posts } from "@/types/Post";
import { Suspense } from "react";
import Hero from "./Components/Hero/Hero";
import LoadIndicator from "./Components/LoadIndicator/LoadIndicator";
import Pool from "./Components/Pool/Pool";
import PostList from "./Components/Post/PostList/PostList";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

const getPosts = async (
  category: string,
  pageIndex: number
): Promise<Posts> => {
  return await fetch(process.env.API + `/page/${category}/${pageIndex}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export default async function Home({
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

  const postList = await getPosts(_category, +_pageIndex);
  if (!postList) return notFound();
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        {/* @ts-ignore */}
        <Pool selected={searchParams?.category} />
        <Suspense fallback={<LoadIndicator />}>
          <PostList postList={postList} />
          {/* <Contact /> */}
        </Suspense>
      </div>
    </main>
  );
}
