"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PostList from "../Components/Post/PostList/PostList";
import SearchBar from "../Components/Searchbar/Searchbar";
import styles from "./page.module.scss";
import { Posts } from "@/types/Post";

const search = async (query: string, pageIndex: number): Promise<Posts> => {
  return await fetch(
    process.env.NEXT_PUBLIC_CMS_API + `/general/search/${query}/${pageIndex}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

const page = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [postList, setPostList] = useState<Posts | null>(null);

  const searchParams = useSearchParams();
  const _searchTerm = searchParams.get("term");
  const _pageIndex = searchParams.get("page");

  useEffect(() => {
    setSearchTerm(_searchTerm);
    const _page = parseInt(_pageIndex || "1");
    setPageIndex(_page);
  }, [searchParams]);

  useEffect(() => {
    if (searchTerm && pageIndex) {
      search(searchTerm, pageIndex).then((res) => {
        setPostList(res);
      });
    }
  }, [searchTerm, pageIndex]);

  return (
    <div className={styles.search}>
      <h1>
        {postList
          ? postList.totalItems >= 0
            ? `Search results for "${searchTerm}"`
            : `No results found for "${searchTerm}"`
          : "Search Something"}
      </h1>
      <SearchBar />
      <React.Suspense>
        {postList && postList.totalItems > 0 && (
          <PostList postList={postList} />
        )}
      </React.Suspense>
    </div>
  );
};

export default page;
