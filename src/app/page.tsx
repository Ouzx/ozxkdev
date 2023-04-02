"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Posts } from "@/types/Post";
import Hero from "./Components/Hero/Hero";
import LoadIndicator from "./Components/LoadIndicator/LoadIndicator";
import Pool from "./Components/Pool/Pool";
import PostList from "./Components/Post/PostList/PostList";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

const getPosts = (category: string, pageIndex: number) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<Posts | undefined>(undefined);

  const fetchPost = () => {
    setLoading(true);

    fetch(
      process.env.NEXT_PUBLIC_CMS_API +
        `/general/page/${category}/${pageIndex}`,
      {
        cache: "no-cache",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setError("No results found");
        } else {
          setSuccess(true);
          setPostData(data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { success, loading, error, postData, fetchPost };
};

export default function Home() {
  const [category, setCategory] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const searchParams = useSearchParams();
  const _searchTerm = searchParams.get("category");
  const _pageIndex = searchParams.get("page");

  const { success, loading, error, postData, fetchPost } = getPosts(
    category!,
    pageIndex
  );
  console.log(category, pageIndex);

  if (error) notFound();

  useEffect(() => {
    setCategory(_searchTerm);
    const _page = parseInt(_pageIndex || "1");
    setPageIndex(_page);
  }, [searchParams]);

  useEffect(() => {
    if (category && pageIndex) {
      fetchPost();
    }
  }, [category, pageIndex]);

  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        <Pool selected={category} />

        {loading ? (
          <LoadIndicator containItself />
        ) : (
          success && postData && <PostList postList={postData as Posts} />
        )}
      </div>
    </main>
  );
}
