"use client";
import React, { useReducer, useState, useEffect } from "react";
import useSWRMutation from "swr/mutation";
import { FetcherResponse } from "swr/_internal";

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
  Submit: (
    url: string,
    { arg }: { arg: { post: iPost; token: string } }
  ) => Promise<Response | void>;
  post?: iPost;
}) => {
  const router = useRouter();
  const [token] = useAccessToken();

  const [isLoading, setIsLoading] = useState(false);
  const { trigger, isMutating } = useSWRMutation("/api/user", Submit);

  const [post, updatePost] = useReducer(
    (state: iPost, newState: Partial<iPost>) => ({
      ...state,
      ...newState,
    }),
    {
      _id: initialPost?._id || "",
      title: initialPost?.title || "",
      content:
        (initialPost &&
          (JSON.parse(
            (initialPost?.content! as string) || ""
          ) as OutputData)) ||
        "",
      category: initialPost?.category || "",
      tags: initialPost?.tags || [],
      keyword: initialPost?.keyword || "",
      shared: initialPost?.shared || true,
      thumbnail: initialPost?.thumbnail || "",
      shortContent: initialPost?.shortContent || "",
      slug: initialPost?.slug || "",
    }
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!post.thumbnail || !post.shortContent || !post.content) {
      const fields = `${!post.thumbnail ? "- Thumbnail" : ""} ${
        !post.shortContent ? "- Short Content" : ""
      } ${!post.content ? " - Content" : ""}`;
      return alert(`Please fill all the fields. ${fields}`);
    }

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
      thumbnail: post.thumbnail,
      shortContent: post.shortContent,
      slug: post.slug,
    };
    if (!token) return;
    trigger({ post: postData, token });
    router.push(`/cms`);
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
      if (!window.confirm("Are you sure you want to leave?")) {
        e.returnValue = "Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
        tabIndex={1}
        autoFocus
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
          tabIndex={5}
        />
        <div className={styles.info}>
          <TextBox
            title="Category"
            required
            data={post.category}
            onChange={(val) => updatePost({ category: val })}
            tabIndex={2}
          />
          <TextBox
            title="Tags"
            required
            data={post.tags.join(",")}
            onChange={(val) =>
              updatePost({ tags: val.split(",").map((v) => v.trim()) })
            }
            tabIndex={3}
          />
          <TextBox
            title="Keyword"
            required
            data={post.keyword}
            onChange={(val) => updatePost({ keyword: val })}
            tabIndex={4}
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
