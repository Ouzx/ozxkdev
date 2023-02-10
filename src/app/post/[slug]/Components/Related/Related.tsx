import { PostMini } from "@/types/Post";
import React from "react";
import Card from "./Card/Card";
import styles from "./Related.module.scss";
const Related = ({ posts }: { posts: PostMini[] }) => {
  let relatedPosts = posts.map((post) => {
    return <Card post={post} key={post._id} />;
  });
  return (
    <div className={styles.related}>
      {relatedPosts.length > 0 && (
        <>
          <h2 className={styles.related_title}>Related Posts</h2>
          {relatedPosts}
        </>
      )}
    </div>
  );
};

export default Related;
