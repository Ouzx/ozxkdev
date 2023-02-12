"use client";
import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";
import TextBox from "../TextBox/TextBox";

import styles from "./Posting.module.scss";

import { getThumbnail, getContent, getShortContent } from "../Editor/Editor";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

interface PostState {
  title: string;
  content: OutputData | undefined;
  category: string;
  tags: string[];
  keyword: string;
  shared: boolean;
  thumbnail: string;
  shortContent: string;
  slug: string;
}

const Posting = () => {
  const [post, updatePost] = useReducer(
    (state: PostState, newState: Partial<PostState>) => ({
      ...state,
      ...newState,
    }),
    {
      title: "",
      content: undefined,
      category: "",
      tags: [],
      keyword: "",
      shared: true,
      thumbnail: "",
      shortContent: "",
      slug: "",
    }
  );

  const onSubmit = () => {};

  return (
    <div className={styles.container}>
      <TextBox
        title="Title"
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
          data={post.content}
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
            data={post.category}
            onChange={(val) => updatePost({ category: val })}
          />
          <TextBox
            title="Tags"
            data={post.tags.join(",")}
            onChange={(val) =>
              updatePost({ tags: val.split(",").map((v) => v.trim()) })
            }
          />
          <TextBox
            title="Keyword"
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
          <Button title={"Create"} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const getSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export default Posting;
