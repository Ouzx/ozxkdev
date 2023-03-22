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

  if (Array.isArray(_searchTerm)) _searchTerm = _searchTerm[0];
  if (Array.isArray(_pageIndex)) _pageIndex = _pageIndex[0];
  let postList: Posts | null = null;
  if (_searchTerm) postList = await search(_searchTerm!, +_pageIndex);

  return (
    <div className={styles.search}>
      <h1>
        {postList
          ? postList.totalItems >= 0
            ? `Search results for "${_searchTerm}"`
            : `No results found for "${_searchTerm}"`
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
