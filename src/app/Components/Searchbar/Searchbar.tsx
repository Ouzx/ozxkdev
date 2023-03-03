"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import styles from "./Searchbar.module.scss";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || search.length < 3) return;
    router.push(`/search?term=${search}`);
  };

  return (
    <div className={styles.search_bar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search ..."
          minLength={2}
          maxLength={32}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.submit} type="submit">
          <div className={styles.icon}>
            <BsSearch />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
