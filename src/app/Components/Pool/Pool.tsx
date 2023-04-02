"use client";
import React, { useState, useEffect } from "react";
import styles from "./Pool.module.scss";
import Item from "./Item";

// const getCategories = async () => {
//   return await fetch(process.env.NEXT_PUBLIC_CMS_API + "/general/categories")
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log(err);
//       return [""];
//     });
// };

const getCategories = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<string[] | undefined>(undefined);

  const fetchPost = () => {
    setLoading(true);

    fetch(process.env.NEXT_PUBLIC_CMS_API + "/general/categories")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setError("No results found");
        } else {
          setSuccess(true);
          const categories = ["All", ...data];
          setPostData(categories);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { success, loading, error, postData, fetchPost };
};

const Pool = ({ selected }: { selected: string | null }) => {
  const selection = selected || "All";
  const { success, loading, error, postData, fetchPost } = getCategories();

  if (error) return null;

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className={styles.pool}>
      {success &&
        postData &&
        postData.map((item) => (
          <Item
            title={item}
            path={item}
            key={item}
            selected={selection === item}
          />
        ))}
    </div>
  );
};

export default Pool;
