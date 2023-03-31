import { useState } from "react";

import { iPost } from "@/types/CMS";

const GET_POST = "GET_POST";
const CREATE_POST = "CREATE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

const usePost = (operationType: string, id?: string) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<iPost | undefined>(undefined);

  let link = "";
  let method = "";
  switch (operationType) {
    case CREATE_POST:
      link = `${process.env.NEXT_PUBLIC_CMS_API}/posts/`;
      method = "POST";
      break;
    case GET_POST:
      link = `${process.env.NEXT_PUBLIC_CMS_API}/posts/${id}`;
      method = "GET";
      break;
    case UPDATE_POST:
      link = `${process.env.NEXT_PUBLIC_CMS_API}/posts/${id}`;
      method = "PATCH";
      break;
    case DELETE_POST:
      link = `${process.env.NEXT_PUBLIC_CMS_API}/posts/${id}`;
      method = "DELETE";
      break;
  }

  const fetchPost = async (
    token: string | undefined,
    postData?: iPost | undefined
  ) => {
    if (!token) return undefined;

    setLoading(true);

    fetch(link, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setPostData(data);
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

export default usePost;

export { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST };
