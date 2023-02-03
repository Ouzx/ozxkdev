import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import styles from "./Button.module.scss";
const Button = ({
  Icon,
  text,
  reverse = false,
}: {
  Icon: IconType;
  text: string;
  reverse?: boolean;
}) => {
  return (
    <Link
      href={"#"}
      className={`${styles.container} ${reverse && styles.reverse}`}
    >
      <div className={styles.wrapper}>
        <Icon className={styles.icon} />
      </div>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
