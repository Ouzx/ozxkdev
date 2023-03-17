import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";

import { iPost } from "@/types/Post";

const Card = ({ post }: { post: iPost }) => {
  return (
    <>
      {post && (
        <Link href={`/post/${post.category}/${post.slug}`}>
          <div className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                className={styles.img}
                width={300}
                height={200}
                src={post.thumbnail}
                alt={post.title}
              />
            </div>
            <div className={styles.info_wrapper}>
              <h3>{post.title}</h3>
              <div className={styles.category_wrapper}>
                <AiOutlineTag className={styles.icon} />
                {post.tags.map((tag) => {
                  const key = post.slug + tag;
                  return <p key={key}>{tag}</p>;
                })}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
