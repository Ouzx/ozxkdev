"use client";
import React from "react";

import useAccessToken from "@/hooks/useAccessToken";
import usePosts from "@/hooks/usePosts";

const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const [token] = useAccessToken();
  const [posts] = usePosts((searchParams?.page as string) || "0", token);

  // table list of posts
  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Shared</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {posts?.posts.map((post) => (
            <tr key={post.slug}>
              <td>{post.title}</td>
              <td>{post.shortContent}</td>
              <td>{post.category}</td>
              <td>{post.tags.join(", ")}</td>
              <td>{post.shared ? "Yes" : "No"}</td>
              <td>{post.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
