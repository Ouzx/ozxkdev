import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import styles from "./Button.module.scss";
const Button = ({
  Icon,
  text,
  slug,
  reverse = false,
  category,
}: {
  Icon: IconType;
  text: string;
  slug: string;
  reverse?: boolean;
  category: string;
}) => {
  return (
    <>
      {slug ? (
        <Link
          href={`/post/${slug}`}
          className={`${styles.container} ${reverse && styles.reverse}`}
        >
          <div className={styles.wrapper}>
            <Icon className={styles.icon} />
          </div>
          <span>{text}</span>
        </Link>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Button;
