import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import card from "@/assets/card.jpg";

const Card = () => {
  return (
    <Link href={"/post"}>
      <div className={styles.card}>
        <div className={styles.img_wrapper}>
          <Image className={styles.img} src={card} alt="card" />
        </div>
        <div className={styles.info_wrapper}>
          <h3>First steps in the right direction</h3>
          <div className={styles.category_wrapper}>
            <AiOutlineTag className={styles.icon} />
            <p>life, sport</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
