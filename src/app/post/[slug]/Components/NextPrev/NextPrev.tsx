import React from "react";
import Button from "./Button";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import styles from "./NextPrev.module.scss";
const NextPrev = ({ nextSlug, prevSlug }: { nextSlug: any; prevSlug: any }) => {
  console.log(nextSlug, prevSlug);
  return (
    <div className={styles.container}>
      <Button Icon={AiFillCaretLeft} text="Previous Post" slug={prevSlug} />
      <Button
        Icon={AiFillCaretRight}
        text="Next Post"
        slug={nextSlug}
        reverse
      />
    </div>
  );
};

export default NextPrev;
