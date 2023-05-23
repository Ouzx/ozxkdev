"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Posts } from "@/types/CMS";

import useAccessToken from "@/hooks/useAccessToken";

import styles from "./page.module.scss";
import DeleteButton from "./Components/DeleteButton/DeleteButton";
import Paginator from "@/Components/Paginator/Paginator";
import LoadIndicator from "../Components/LoadIndicator/LoadIndicator";
const getPosts = (pageIndex: number) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<Posts | undefined>(undefined);

  const fetchPost = (token: string) => {
    if (!token) return;
    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/page/${pageIndex}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: Posts) => {
        if (data.totalItems === 0) {
          setError("No results found");
        } else {
          setSuccess(true);
          setPostData(data);
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

const page = () => {
  const router = useRouter();
  const [token] = useAccessToken();

  const [pageIndex, setPageIndex] = useState<number>(1);
  const searchParams = useSearchParams()!;
  const _pageIndex = searchParams.get("page");

  const { success, loading, error, postData, fetchPost } = getPosts(pageIndex);

  useEffect(() => {
    const _page = parseInt(_pageIndex || "1");
    setPageIndex(_page);
  }, [searchParams]);

  useEffect(() => {
    if (pageIndex && token) {
      fetchPost(token);
    }
  }, [pageIndex, token]);

  // table list of posts
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {error ? (
        <p>No posts found</p>
      ) : loading ? (
        <LoadIndicator containItself />
      ) : (
        success && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Publish Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {postData?.posts?.map((post) => (
                  <tr
                    className={styles.row}
                    key={post._id}
                    onClick={() => {
                      router.push(`/cms/edit/${post._id}`);
                    }}
                  >
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.shared ? "Public" : "Private"}</td>
                    <td>{new Date(post.createdAt || "").toDateString()}</td>
                    <td>
                      <DeleteButton
                        postId={post._id || ""}
                        postTitle={post.title}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.paginator}>
              <Paginator totalItems={postData?.totalItems!} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default page;
