import React from "react";
import Image from "next/image";
import Link from "next/link";

import { iPost } from "@/types/Post";

import styles from "./PostCard.module.scss";

// import postImage from "@/assets/post-template.jpg";

const PostCard = ({ postData }: { postData: iPost }) => {
  let tags = postData.tags.map((tag) => {
    const key = Math.random().toString(36).substring(7) + tag;
    return (
      <Link href={`#`} key={key}>
        {tag}
      </Link>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.post_card}>
        <Link href={`/post/${postData.category}/${postData.slug}`} scroll>
          <Image
            className={styles.post_card__image}
            alt="Post Image"
            src={postData?.thumbnail!}
            width={1024}
            height={1024}
          />
          <div className={styles.post_card__content}>
            <p className={styles.post_card__info}>
              {`by ${postData.author}, ${postData.createdAt}`}
            </p>
            <h2>{postData.title}</h2>
            <p>{postData.shortContent}</p>
          </div>
        </Link>
        {/* <hr /> */}
        <div className={styles.categories}>{tags}</div>
      </div>
    </div>
  );
};

export default PostCard;
