import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./PostCard.module.scss";

import postImage from "@/assets/post-template.jpg";

const PostCard = () => {
  return (
    <div className={styles.post_card}>
      <Link href="/post" scroll>
        <Image
          className={styles.post_card__image}
          alt="Post Image"
          src={postImage}
        />
        <div className={styles.post_card__content}>
          <p className={styles.post_card__info}>
            by Oguzhan Kandakoglu January 27, 2023
          </p>
          <h2>Trip that you'll never ever forget</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quae
            eaque, quos possimus veniam unde fugiat cum ullam similique incidunt
            voluptatem accusamus porro qui aliquam. Ipsum quia doloribus saepe?
            Ab!
          </p>
        </div>
      </Link>
      {/* <hr /> */}
      <div className={styles.categories}>
        <Link href="#">People</Link>
        <Link href={"#"}>Travel</Link>
      </div>
    </div>
  );
};

export default PostCard;
