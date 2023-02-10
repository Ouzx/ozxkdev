import PostList from "../Components/Post/PostList/PostList";
import React from "react";
import styles from "./page.module.scss";
const page = () => {
  return (
    <div className={styles.search}>
      <h1>Search Results for "lorem"</h1>
      {/* <PostList /> */}
    </div>
  );
};

export default page;
