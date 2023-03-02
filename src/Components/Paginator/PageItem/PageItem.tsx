"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PageItem.module.scss";

interface PageItemProps {
  page: number;
  destination: string;
  isActive?: boolean;
  placeholder?: string;
}

const PageItem = ({
  isActive,
  page,
  placeholder,
  destination,
}: PageItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${isActive && styles.active} ${styles.pageItem}`}
      href={`${pathname}?${destination}`}
    >
      {placeholder ? placeholder : page}
    </Link>
  );
};

export default PageItem;
