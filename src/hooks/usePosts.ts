import { useState, useEffect } from "react";
import { Posts } from "@/types/CMS";

const getPosts = async (token: string, page: string): Promise<Posts> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API}/posts/page/${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const data = await res;
  return data;
};

const usePosts = (
  page: string,
  token: string | undefined
): [Posts | undefined] => {
  const [posts, setPosts] = useState<Posts>();

  useEffect(() => {
    if (!token) return;
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await getPosts(token, page);
      if (isSubscribed) setPosts(data);
    };

    fetchData().catch((err) => console.log(err));
    return () => {
      isSubscribed = false;
    };
  }, [page, token]);

  return [posts];
};

export default usePosts;
