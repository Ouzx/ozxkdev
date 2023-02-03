import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "./Social.module.scss";
import SocialButton from "./SocialButton";

// take className from parent component

const Social = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.social} ${className}`}>
      <SocialButton
        Icon={AiFillLinkedin}
        link="https://www.linkedin.com/in/ozxk/"
        userName="ozxk"
        name="Linkedin"
      />
      <SocialButton
        Icon={AiFillGithub}
        link="https://github.com/Ouzx"
        userName="Ouzx"
        name="Github"
      />
    </div>
  );
};

export default Social;
