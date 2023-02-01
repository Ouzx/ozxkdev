import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Searchbar.module.scss";
const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <input type="text" name="search" id="search" placeholder="Search ..." />

      <Link href="#">
        <div className={styles.icon}>
          <BsSearch />
        </div>
      </Link>
    </div>
  );
};

export default SearchBar;
