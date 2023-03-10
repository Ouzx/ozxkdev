"use client";
import React from "react";
import Posting from "../Components/Posting/Posting";
import { iPost } from "@/types/CMS";

const createPost = async (
  url: string,
  { arg }: { arg: { post: iPost; token: string } }
) => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${arg?.token}`,
    },
    body: JSON.stringify(arg?.post),
  }).catch((err) => console.log(err));
};

const page = () => (
  <div>
    <Posting Submit={createPost} />
  </div>
);

export default page;
