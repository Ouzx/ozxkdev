import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from "./PostList.module.scss";
import Pagination from "./Pagination/Pagination";
import { posts } from "@/lib/general";

const PostList = async ({
  category,
  pageIndex,
}: {
  category?: string | string[] | undefined;
  pageIndex?: string | string[] | undefined;
}) => {
  let cat = category ? category : "all";
  let page = pageIndex ? pageIndex : 1;

  if (Array.isArray(cat)) cat = cat[0];
  if (Array.isArray(page)) page = page[0];

  const postList = await posts(cat as string, page as number);

  let postCards = postList?.posts.map((post, i) => {
    post.createdAt = new Date(post.createdAt).toDateString();
    return <PostCard postData={post} key={post._id} />;
  });

  return (
    <>
      <div className={styles.post_list}>{postCards}</div>
      <Pagination category={cat} postCount={postList?.totalItems} />
    </>
  );
};

export default PostList;
