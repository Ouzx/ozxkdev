import "server-only";
import { Posts, PostMain, Post } from "@/types/Post";

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

export const post = async (slug: string): Promise<PostMain> => {
  return await (await fetch(link + `/post/${slug}`)).json();
};
