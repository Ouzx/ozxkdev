"use client";
import React from "react";
import PostCard from "@/app/Components/Post/PostCard/PostCard";
import styles from "./PostList.module.scss";
import Pagination from "./Pagination/Pagination";

const PostList = () => {
  return (
    <>
      <div className={styles.post_list}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Pagination />
    </>
  );
};

export default PostList;
