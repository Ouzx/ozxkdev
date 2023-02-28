"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PageItem.module.scss";

interface PageItemProps {
  page: number;
  isActive?: boolean;
}

const PageItem = ({ isActive, page }: PageItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${isActive && styles.active}`}
      href={`${pathname}?page=${page}`}
    >
      {page}
    </Link>
  );
};

export default PageItem;
