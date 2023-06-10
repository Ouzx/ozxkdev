"use client";
import React from "react";
import Image from "next/image";

import { useDataContext } from "../../Context/DataContext";

import styles from "./Profile.module.scss";
import pp from "@/assets/PP.png";

const Profile = () => {
  const { Name, JobTitle } = useDataContext();
  return (
    <>
      <Image className={styles.pp} src={pp} alt="" />
      <p className={styles.name}>{Name}</p>
      <p className={styles.role}>{JobTitle}</p>
    </>
  );
};

export default Profile;
