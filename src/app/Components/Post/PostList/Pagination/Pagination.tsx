"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

const Pagination = ({
  category,
  postCount,
}: {
  category: string | string[] | undefined;
  postCount: number;
}) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Previous"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={postCount / ITEMS_PER_PAGE}
        renderOnZeroPageCount={() => {}}
        className={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.active}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        breakLinkClassName={styles.break}
        onClick={(e) => {
          router.push(`/?category=${category}&page=${e.selected}`);
          router.refresh();
        }}
      />
    </div>
  );
};

export default Pagination;
