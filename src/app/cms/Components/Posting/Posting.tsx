"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";
import TextBox from "../TextBox/TextBox";

import styles from "./Posting.module.scss";

import { getThumbnail, getContent, getShortContent } from "../Editor/Editor";
const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

// TODO:Add getSLug

const Posting = () => {
  const [content, setContent] = useState<OutputData>();
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [tags, setTags] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>();

  return (
    <div className={styles.container}>
      <TextBox title="Title" data={title} onChange={setTitle} />
      <div className={styles.main}>
        <EditorBlock data={content} onChange={setContent} />
        <div className={styles.info}>
          <TextBox title="Category" data={category} onChange={setCategory} />
          <TextBox
            title="Tags"
            data={tags.join(",")}
            onChange={(val) => setTags(val.split(","))}
          />
          <TextBox title="Keyword" data={keyword} onChange={setKeyword} />
        </div>
      </div>
    </div>
  );
};

export default Posting;
