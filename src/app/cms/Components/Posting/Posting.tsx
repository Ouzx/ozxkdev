"use client";
import React, { useReducer, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { iPost } from "@/types/CMS";

import styles from "./Posting.module.scss";

import useAccessToken from "@/hooks/useAccessToken";

import TextBox from "../TextBox/TextBox";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";

import { OutputData } from "@editorjs/editorjs";
import { getThumbnail, getContent, getShortContent } from "../Editor/Editor";
const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

const Posting = ({
  Submit,
  post: initialPost,
}: {
  Submit: (post: iPost, token: string) => Promise<iPost>;
  post?: iPost;
}) => {
  const router = useRouter();
  const [token] = useAccessToken();

  const [isLoading, setIsLoading] = useState(false);

  const [post, updatePost] = useReducer(
    (state: iPost, newState: Partial<iPost>) => ({
      ...state,
      ...newState,
    }),
    {
      _id: initialPost?._id || "",
      title: initialPost?.title || "",
      content: (JSON.parse(initialPost?.content as string) as OutputData) || "",
      category: initialPost?.category || "",
      tags: initialPost?.tags || [],
      keyword: initialPost?.keyword || "",
      shared: initialPost?.shared || false,
      thumbnail: initialPost?.thumbnail || "",
      shortContent: initialPost?.shortContent || "",
      slug: initialPost?.slug || "",
      createdAt: initialPost?.createdAt || "",
    }
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    // convert post: PostState to post: Post
    const postData: iPost = {
      _id: post._id,
      title: post.title,
      content: getContent(post.content as OutputData),
      category: post.category,
      tags: post.tags,
      keyword: post.keyword,
      shared: post.shared,
      thumbnail: "PostThumbnail",
      shortContent: post.shortContent,
      slug: post.slug,
      createdAt: new Date().toISOString(),
    };
    if (!token) return;
    const res = await Submit(postData, token);
    if (res) {
      router.push(`/cms`);
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <TextBox
        title="Title"
        required
        data={post.title}
        onChange={(val) =>
          updatePost({
            title: val,
            slug: getSlug(val),
          })
        }
      />
      <div className={styles.main}>
        <EditorBlock
          data={post.content as OutputData}
          onChange={(val) => {
            updatePost({
              content: val,
              thumbnail: getThumbnail(val),
              shortContent: getShortContent(val),
            });
          }}
        />
        <div className={styles.info}>
          <TextBox
            title="Category"
            required
            data={post.category}
            onChange={(val) => updatePost({ category: val })}
          />
          <TextBox
            title="Tags"
            required
            data={post.tags.join(",")}
            onChange={(val) =>
              updatePost({ tags: val.split(",").map((v) => v.trim()) })
            }
          />
          <TextBox
            title="Keyword"
            required
            data={post.keyword}
            onChange={(val) => updatePost({ keyword: val })}
          />
          <Switch
            onChange={(val) => updatePost({ shared: val })}
            title="Status"
            data={post.shared}
            trueText="Public"
            falseText="Private"
          />
          <Button
            title={
              isLoading
                ? initialPost
                  ? "Updating..."
                  : "Creating..."
                : initialPost
                ? "Update"
                : "Create"
            }
          />
        </div>
      </div>
    </form>
  );
};

const getSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export default Posting;
