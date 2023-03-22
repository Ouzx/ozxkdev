import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from "./PostList.module.scss";
import Paginator from "@/Components/Paginator/Paginator";
import { Posts } from "@/types/Post";

const PostList = ({ postList }: { postList: Posts }) => {
  let postCards = postList?.posts.map((post, i) => {
    post.createdAt = new Date(post.createdAt).toDateString();
    return <PostCard postData={post} key={post.title + i} />;
  });

  return (
    <>
      <div className={styles.post_list}>{postCards}</div>
      <Paginator totalItems={postList?.totalItems} />
    </>
  );
};

export default PostList;
