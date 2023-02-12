"use client";
import React from "react";
import Posting from "../Components/Posting/Posting";
import { Post } from "@/types/CMS";

const createPost = async (post: Post, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const data = await res;
  return data;
};

const page = () => (
  <div>
    <Posting Submit={createPost} />
  </div>
);

export default page;
