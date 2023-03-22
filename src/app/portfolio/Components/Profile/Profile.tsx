import React from "react";
import Image from "next/image";
import styles from "./Profile.module.scss";
import pp from "@/assets/PP.png";

const Profile = () => {
  return (
    <>
      <Image className={styles.pp} src={pp} alt="" />
      <p className={styles.name}>Oğuzhan Kandakoğlu</p>
      <p className={styles.role}>Full Stack Developer</p>
    </>
  );
};

export default Profile;
