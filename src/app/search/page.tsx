import React from "react";
import PostList from "../Components/Post/PostList/PostList";
import SearchBar from "../Components/Searchbar/Searchbar";
import styles from "./page.module.scss";
import { Posts } from "@/types/Post";
import { notFound } from "next/navigation";

const search = async (query: string, pageIndex: number): Promise<Posts> => {
  return await fetch(process.env.API + `/search/${query}/${pageIndex}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const searchTerm = searchParams?.term;
  const pageIndex = searchParams?.page;

  let _searchTerm = searchTerm ? searchTerm : null;
  let _pageIndex = pageIndex ? pageIndex : 1;

  console.error(_searchTerm, _pageIndex);
  if (!_searchTerm) {
    notFound();
  }

  if (Array.isArray(_searchTerm)) _searchTerm = _searchTerm[0];
  if (Array.isArray(_pageIndex)) _pageIndex = _pageIndex[0];

  const postList = await search(_searchTerm!, +_pageIndex);

  if (!postList || !postList.posts || postList.posts.length === 0) {
    notFound();
  }

  return (
    <div className={styles.search}>
      <h1>Search Results for "{_searchTerm}"</h1>
      <SearchBar />
      <PostList postList={postList} />
    </div>
  );
};

export default page;
