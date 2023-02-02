"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

import styles from "./Share.module.scss";
const Share = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Share</h2>
      <div className={styles.share}>
        <FacebookShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://www.example.com"}
          title={"Dummy text!"}
          hashtags={["muo"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={"https://www.example.com"}
          title={"Dummy text!"}
          summary={"Dummy text!"}
          source={"https://www.example.com"}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
