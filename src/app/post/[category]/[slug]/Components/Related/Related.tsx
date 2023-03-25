import { iPost } from "@/types/Post";
import React from "react";
import Card from "./Card/Card";
import styles from "./Related.module.scss";
const Related = ({ posts }: { posts: iPost[] }) => {
  let relatedPosts = posts.map((post, i) => {
    return <Card post={post} key={post.slug + i + "related"} />;
  });
  return (
    <div>
      <h2 className={styles.related_title}>Related Posts</h2>
      <div className={styles.related}>
        {relatedPosts.length > 0 && <>{relatedPosts}</>}
      </div>
    </div>
  );
};

export default Related;
