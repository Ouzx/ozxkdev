"use client"; // Error components must be Client components

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import errorPic from "@/assets/error.jpg";
import styles from "./error.module.scss";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  console.log(error);

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
}
