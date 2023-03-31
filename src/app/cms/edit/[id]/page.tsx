"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const Posting = dynamic(() => import("../../Components/Posting/Posting"), {
  ssr: false,
});

import { iPost } from "@/types/CMS";
import useAccessToken from "@/hooks/useAccessToken";
import usePost, { GET_POST, UPDATE_POST } from "@/hooks/usePost";

import LoadIndicator from "@/app/Components/LoadIndicator/LoadIndicator";

const page = ({ params }: { params: { id: string } }) => {
  const [token] = useAccessToken();
  const { success, loading, error, postData, fetchPost } = usePost(
    GET_POST,
    params.id
  );
  useEffect(() => {
    if (error) {
      alert("There was an error fetching the post. Please try again later.");
      notFound();
    }
  }, [error]);

  useEffect(() => {
    if (!loading && !success && !error && token) {
      fetchPost(token);
    }
  }, [loading, token]);

  return (
    <div>
      {loading && <LoadIndicator containItself />}
      {success && <Posting operation={UPDATE_POST} post={postData} />}
    </div>
  );
};

export default page;
