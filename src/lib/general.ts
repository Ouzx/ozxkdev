import "server-only";
import { Posts, PostMain, iPost } from "@/types/Post";

const link = process.env.API;

export const categories = async () => {
  return await fetch(link + "/categories")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const posts = async (
  category: string,
  pageIndex: number
): Promise<Posts> => {
  return await fetch(link + `/page/${category}/${pageIndex}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const post = async (
  slug: string,
  category: string
): Promise<PostMain> => {
  return await (await fetch(link + `/post/${category}/${slug}`)).json();
};

export const search = async (
  query: string,
  pageIndex: number
): Promise<Posts> => {
  return await (
    await fetch(link + `/search/${query}/${pageIndex}`).catch()
  ).json();
};
