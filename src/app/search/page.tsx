import React from "react";
import PostList from "../Components/Post/PostList/PostList";
import SearchBar from "../Components/Searchbar/Searchbar";
import styles from "./page.module.scss";
import { Posts } from "@/types/Post";
import NotFound from "@/app/Components/notFound/NotFound";

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

  if (!_searchTerm) {
    return <NotFound message={"No results found."} />;
  }

  if (Array.isArray(_searchTerm)) _searchTerm = _searchTerm[0];
  if (Array.isArray(_pageIndex)) _pageIndex = _pageIndex[0];

  const postList = await search(_searchTerm, +_pageIndex);

  if (!postList || !postList.posts || postList.posts.length === 0) {
    return <NotFound message={"No results found."} />;
  }

  return (
    <div className={styles.search}>
      <h1>Search Results for {_searchTerm}</h1>
      <SearchBar />
      <PostList postList={postList} />
    </div>
  );
};

export default page;
