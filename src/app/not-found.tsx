import React from "react";
import Image from "next/image";
import Link from "next/link";
import errorPic from "@/assets/error.jpg";
import styles from "./not-found.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={errorPic} alt="error" />
      <Link href={"/"}>
        <button className={styles.button}>
          <span>Go back to home</span>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
