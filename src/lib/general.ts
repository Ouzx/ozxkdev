import "server-only";
import { Posts, PostMain } from "@/types/Post";

export const posts = async (
  category: string,
  pageIndex: number
): Promise<Posts> => {
  return await fetch(process.env.API + `/page/${category}/${pageIndex}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const search = async (
  query: string,
  pageIndex: number
): Promise<Posts> => {
  return await (
    await fetch(process.env.API + `/search/${query}/${pageIndex}`).catch()
  ).json();
};
