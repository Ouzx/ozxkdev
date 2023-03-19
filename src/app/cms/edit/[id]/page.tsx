"use client";
import React, { useEffect, useState } from "react";
import Posting from "../../Components/Posting/Posting";
import { iPost } from "@/types/CMS";
import useAccessToken from "@/hooks/useAccessToken";

const updatePost = async (
  url: string,
  { arg }: { arg: { post: iPost; token: string } }
) => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/${arg?.post._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${arg?.token}`,
    },
    body: JSON.stringify(arg?.post),
  }).catch((err) => console.log(err));
};

const getPost = async (id: string, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

const page = ({ params }: { params: { id: string } }) => {
  if (window === undefined) return <div>Loading...</div>;

  const [token] = useAccessToken();
  const [post, setPost] = useState<iPost>();
  useEffect(() => {
    if (!token) return;
    getPost(params.id, token).then((res) => setPost(res));
  }, [params.id, token]);
  return <div>{post && <Posting Submit={updatePost} post={post} />}</div>;
};

export default page;
