import React from "react";
import Image from "next/image";

import styles from "./PostCard.module.scss";

import postImage from "../../../../assets/post-template.jpg";

const PostCard = () => {
  return (
    <a href="/post" className={styles.post_card}>
      <Image
        className={styles.post_card__image}
        alt="Post Image"
        src={postImage}
      />
      <div className={styles.post_card__content}>
        <a className={styles.post_card__info} href="#">
          by Oguzhan Kandakoglu January 27, 2023
        </a>
        <h2>Trip that you'll never ever forget</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quae
          eaque, quos possimus veniam unde fugiat cum ullam similique incidunt
          voluptatem accusamus porro qui aliquam. Ipsum quia doloribus saepe?
          Ab!
        </p>
      </div>
      {/* <hr /> */}
      <div className={styles.categories}>
        <a href="#1">People</a>
        <a href="#2">Travel</a>
      </div>
    </a>
  );
};

export default PostCard;
