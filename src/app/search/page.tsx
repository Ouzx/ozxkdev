"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PostList from "../Components/Post/PostList/PostList";
import SearchBar from "../Components/Searchbar/Searchbar";
import styles from "./page.module.scss";
import { Posts } from "@/types/Post";

const search = (query: string, pageIndex: number) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<Posts | undefined>(undefined);

  const fetchPost = () => {
    setLoading(true);

    fetch(
      process.env.NEXT_PUBLIC_CMS_API + `/general/search/${query}/${pageIndex}`,
      {
        cache: "no-cache",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.totalItems === 0) {
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

const page = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const searchParams = useSearchParams();
  const _searchTerm = searchParams.get("term");
  const _pageIndex = searchParams.get("page");

  const { success, loading, error, postData, fetchPost } = search(
    searchTerm!,
    pageIndex
  );

  useEffect(() => {
    setSearchTerm(_searchTerm);
    const _page = parseInt(_pageIndex || "1");
    setPageIndex(_page);
  }, [searchParams]);

  useEffect(() => {
    if (searchTerm && pageIndex) {
      fetchPost();
    }
  }, [searchTerm, pageIndex]);

  return (
    <div className={styles.search}>
      {error ? (
        <>
          <h1>No results found for "{searchTerm}"</h1>
          <h2>Try searching for something else</h2>
        </>
      ) : loading ? (
        <h1>Searching for "{searchTerm}"...</h1>
      ) : success ? (
        <h1>Search Results for "{searchTerm}"</h1>
      ) : searchTerm ? (
        <h1>Searching for "{searchTerm}"...</h1>
      ) : (
        <h1>Search Something</h1>
      )}
      <SearchBar />
      <PostList postList={postData as Posts} />
    </div>
  );
};

export default page;
