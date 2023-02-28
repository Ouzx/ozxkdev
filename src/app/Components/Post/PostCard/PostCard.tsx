import React from "react";
import Image from "next/image";
import Link from "next/link";

import { iPost } from "@/types/Post";

import styles from "./PostCard.module.scss";

import postImage from "@/assets/post-template.jpg";

const PostCard = ({ postData }: { postData: iPost }) => {
  let tags = postData.tags.map((tag) => {
    const key = Math.random().toString(36).substring(7);
    return (
      <Link href={`#`} key={key}>
        {tag}
      </Link>
    );
  });

  return (
    <div className={styles.post_card}>
      <Link href={`/post/${postData.category}/${postData.slug}`} scroll>
        <Image
          className={styles.post_card__image}
          alt="Post Image"
          src={postImage}
        />
        <div className={styles.post_card__content}>
          <p className={styles.post_card__info}>
            {/* by Oguzhan Kandakoglu January 27, 2023 */}
            {`by Oguzhan Kandakoglu, ${postData.createdAt}`}
          </p>
          <h2>{postData.title}</h2>
          <p>{postData.shortContent}</p>
        </div>
      </Link>
      {/* <hr /> */}
      <div className={styles.categories}>{tags}</div>
    </div>
  );
};

export default PostCard;
