import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Previous"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={10}
        renderOnZeroPageCount={() => {}}
        className={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.active}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        breakLinkClassName={styles.break}
        // forcePage={0}
      />
    </div>
  );
};

export default Pagination;
