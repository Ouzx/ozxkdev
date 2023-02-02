import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCopy } from "react-icons/fa";
import ShareButton from "./ShareButton";
import styles from "./Share.module.scss";
const Share = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Share</h2>
      <div className={styles.share}>
        <ShareButton Icon={FaFacebookF} link="#" />
        <ShareButton Icon={FaLinkedinIn} link="#" />
        <ShareButton Icon={FaTwitter} link="#" />
      </div>
    </div>
  );
};

export default Share;
