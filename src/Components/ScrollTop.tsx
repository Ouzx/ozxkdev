"use client";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smoothly scrolling
      });
    };
    scrollToTop();
  }, []);
  return null;
};

export default ScrollTop;
