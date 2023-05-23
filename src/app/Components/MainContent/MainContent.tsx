"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, notFound } from "next/navigation";

import LoadIndicator from "../LoadIndicator/LoadIndicator";
import Pool from "../Pool/Pool";
import PostList from "../Post/PostList/PostList";

import { Posts } from "@/types/Post";
import styles from "./MainContent.module.scss";

const getPosts = (category: string, pageIndex: number) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<Posts | undefined>(undefined);

  const fetchPost = () => {
    setLoading(true);

    fetch(
      process.env.NEXT_PUBLIC_CMS_API + `/general/page/${category}/${pageIndex}`
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

const MainContent = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const searchParams = useSearchParams()!;
  const _category = searchParams.get("category") || "All";
  const _pageIndex = searchParams.get("page");

  const { success, loading, error, postData, fetchPost } = getPosts(
    category!,
    pageIndex
  );

  if (error) notFound();

  useEffect(() => {
    setCategory(_category);
    const _page = parseInt(_pageIndex || "1");
    setPageIndex(_page);
  }, [searchParams]);

  useEffect(() => {
    if (category && pageIndex) {
      fetchPost();
    }
  }, [category, pageIndex]);

  return (
    <div className={styles.content}>
      <Pool selected={category} />

      {loading ? (
        <LoadIndicator containItself />
      ) : (
        success && postData && <PostList postList={postData as Posts} />
      )}
    </div>
  );
};

export default MainContent;
