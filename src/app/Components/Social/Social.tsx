import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "./Social.module.scss";
import SocialButton from "./SocialButton";

// take className from parent component

const Social = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.social} ${className}`}>
      <SocialButton
        link="https://www.linkedin.com/in/ozxk/"
        userName="ozxk"
        name="Linkedin"
      >
        <AiFillLinkedin size={28} />
      </SocialButton>
      <SocialButton
        link="https://github.com/Ouzx"
        userName="Ouzx"
        name="Github"
      >
        <AiFillGithub size={28} />
      </SocialButton>
    </div>
  );
};

export default Social;
