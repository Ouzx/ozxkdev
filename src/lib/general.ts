import "server-only";
import { Posts, PostMain, Post } from "@/types/Post";

const link = process.env.API;

export const categories = async () => {
  // return await fetch(link + "/categories")
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // return dummy data as promise
  return new Promise((resolve) => {
    resolve(["Daily", "Weekly", "Monthly", "Yearly"]);
  });
};

export const posts = async (
  category: string,
  pageIndex: number
): Promise<Posts> => {
  // return await fetch(link + `/page/${category}/${pageIndex}`)
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // return dummy data as promise
  return new Promise((resolve) => {
    resolve({
      posts: [
        {
          title: "Post 1",
          urlSuffix: "post-1",
          category: "Daily",
          createdAt: "2021-01-01",
          thumbnail: "https://picsum.photos/200/300",
          __v: 0,
          _id: "1",
          content: "Post 1 content",
          raw: "Post 1 raw",
          tags: ["tag1", "tag2"],
          updatedAt: "2021-01-01",
          user: "user1",
          shared: true,
          shortContent: "Post 1 short content",
        },
      ],
      totalItems: 1,
    });
  });
};

export const post = async (slug: string): Promise<PostMain> => {
  return await (await fetch(link + `/post/${slug}`)).json();
};
