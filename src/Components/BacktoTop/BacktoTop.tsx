"use client";
import { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

import styles from "./BacktoTop.module.scss";
const BacktoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className={styles.backto_top}>
          <AiFillCaretUp size={32} />
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
