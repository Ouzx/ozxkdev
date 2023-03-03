import { search } from "@/lib/general";
import React, { use } from "react";
import PostList from "../Components/Post/PostList/PostList";
import SearchBar from "../Components/Searchbar/Searchbar";
import styles from "./page.module.scss";

const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const searchTerm = searchParams?.term;
  const pageIndex = searchParams?.page;

  let _searchTerm = searchTerm ? searchTerm : null;
  let _pageIndex = pageIndex ? pageIndex : 1;

  if (!_searchTerm) {
    return notFound();
  }

  if (Array.isArray(_searchTerm)) _searchTerm = _searchTerm[0];
  if (Array.isArray(_pageIndex)) _pageIndex = _pageIndex[0];

  const postList = use(search(_searchTerm, +_pageIndex));

  if (!postList || !postList.posts) {
    return notFound();
  }

  return (
    <div className={styles.search}>
      <h1>Search Results for {_searchTerm}</h1>
      <SearchBar />
      <PostList postList={postList} />
    </div>
  );
};

const notFound = () => (
  <div className={styles.search}>
    <p>No results found.</p>
  </div>
);

export default page;
