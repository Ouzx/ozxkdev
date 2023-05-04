"use client";
import React, { useCallback, useEffect, useState } from "react";

import PageItem from "./PageItem/PageItem";
import styles from "./Paginator.module.scss";
import { useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 10;
const PAGES_TO_SHOW = 5;

const Paginator = ({ totalItems }: { totalItems: number }) => {
  const searchParams = useSearchParams()!;
  const page: number = +(searchParams.get("page") || "");

  const [pageList, setPageList] = useState<JSX.Element[]>([]);

  const createQueryString = useCallback(
    (value: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", value.toString());

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (!totalItems) return;

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    // const totalPages = 15;
    let _pageList = [] as JSX.Element[];
    let pageCountToDisplay = PAGES_TO_SHOW;

    const activePage = page || 1;

    _pageList.push(
      <PageItem
        page={activePage}
        key={activePage}
        isActive
        destination={createQueryString(activePage)}
      />
    );
    pageCountToDisplay--;

    let i = 1;
    while (pageCountToDisplay > 0) {
      if (activePage > totalPages) break;
      if (activePage < 1) break;
      if (Math.abs(i) > totalPages) break;

      if (activePage - i > 0) {
        _pageList.unshift(
          <PageItem
            page={activePage - i}
            key={activePage - i}
            destination={createQueryString(activePage - i)}
          />
        );
        pageCountToDisplay--;
      }
      if (activePage + i <= totalPages) {
        _pageList.push(
          <PageItem
            page={activePage + i}
            key={activePage + i}
            destination={createQueryString(activePage + i)}
          />
        );
        pageCountToDisplay--;
      }
      i++;
    }

    if (activePage > 1)
      _pageList.unshift(
        <PageItem
          page={activePage - 1}
          key={`${activePage - 1}previous`}
          placeholder="< Previous"
          destination={createQueryString(activePage - 1)}
        />
      );
    if (activePage < totalPages)
      _pageList.push(
        <PageItem
          page={activePage + 1}
          key={`${activePage + 1}next`}
          placeholder="Next >"
          destination={createQueryString(activePage + 1)}
        />
      );
    setPageList(_pageList);
  }, [page, totalItems]);

  return (
    <div>
      {pageList?.length > 1 && (
        <div className={styles.container}>
          {pageList?.map((PageItem) => PageItem)}
        </div>
      )}
    </div>
  );
};

export default Paginator;
