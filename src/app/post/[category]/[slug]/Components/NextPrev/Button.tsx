import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
const Button = ({
  text,
  slug,
  reverse = false,
  category,
  children,
}: {
  text: string;
  slug: string;
  reverse?: boolean;
  category: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      {slug ? (
        <Link
          href={`/post/${category}/${slug}`}
          className={`${styles.container} ${reverse && styles.reverse}`}
        >
          <div className={styles.wrapper}>{children}</div>
          <span>{text}</span>
        </Link>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Button;
