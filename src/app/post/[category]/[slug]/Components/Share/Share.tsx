"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

import styles from "./Share.module.scss";
const Share = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Share</h2>
      <div className={styles.share}>
        <FacebookShareButton url={url} quote={title + "\n"} hashtag="#ozxkdev">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          title={title + "\n"}
          hashtags={["ozxkdev"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          title={title + "\n"}
          summary={title}
          source={url}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
