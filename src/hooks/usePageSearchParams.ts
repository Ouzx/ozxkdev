"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const usePageSearchParams = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, [searchParams]);

  return currentPage;
};

export default usePageSearchParams;
