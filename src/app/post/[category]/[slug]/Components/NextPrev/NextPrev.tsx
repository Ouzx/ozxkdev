import React from "react";
import Button from "./Button";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import styles from "./NextPrev.module.scss";
const NextPrev = ({
  nextSlug,
  prevSlug,
  category,
}: {
  nextSlug: any;
  prevSlug: any;
  category: string;
}) => {
  return (
    <div className={styles.container}>
      <Button
        Icon={AiFillCaretLeft}
        text="Previous Post"
        slug={prevSlug}
        category={category}
      />
      <Button
        Icon={AiFillCaretRight}
        text="Next Post"
        slug={nextSlug}
        category={category}
        reverse
      />
    </div>
  );
};

export default NextPrev;
