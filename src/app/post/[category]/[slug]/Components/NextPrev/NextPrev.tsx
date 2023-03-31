import React from "react";
import Button from "./Button";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import styles from "./NextPrev.module.scss";

import { MicroPost } from "@/types/Post";
const NextPrev = ({
  nextPost,
  prevPost,
}: {
  nextPost: MicroPost;
  prevPost: MicroPost;
}) => {
  return (
    <div className={styles.container}>
      <Button
        text="Previous Post"
        slug={prevPost?.slug}
        category={prevPost?.category}
      >
        <AiFillCaretLeft />
      </Button>
      <Button
        text="Next Post"
        slug={nextPost?.slug}
        category={nextPost?.category}
        reverse
      >
        <AiFillCaretRight />
      </Button>
    </div>
  );
};

export default NextPrev;
