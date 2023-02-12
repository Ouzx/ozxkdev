"use client";
import React from "react";
import { useRouter } from "next/navigation";

import useAccessToken from "@/hooks/useAccessToken";
import usePosts from "@/hooks/usePosts";

import styles from "./page.module.scss";
import DeleteButton from "./Components/DeleteButton/DeleteButton";

const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const [token] = useAccessToken();
  const [posts] = usePosts((searchParams?.page as string) || "0", token);
  // table list of posts
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts?.posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
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
            {posts?.posts.map((post) => (
              <tr
                className={styles.row}
                key={post._id}
                onClick={() => {
                  router.push(`/cms/edit/${post.slug}`);
                }}
              >
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.shared ? "Public" : "Private"}</td>
                <td>{new Date(post.createdAt).toDateString()}</td>
                <td>
                  <DeleteButton postId={post._id || ""} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default page;
