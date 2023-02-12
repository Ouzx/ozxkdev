"use client";

import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import configuration from "./configuration";
import styles from "./Editor.module.scss";

export const getThumbnail = (editorData: OutputData) => {
  for (let i = 0; i < editorData?.blocks?.length; i++) {
    if (
      editorData.blocks[i].type == "image" &&
      editorData.blocks[i].data.file.url
    ) {
      return editorData.blocks[i].data.file.url;
    }
  }
  return "";
};

export const getContent = (editorData: OutputData) => {
  if (!editorData) return "";
  // copy editorData.blocks remove title
  let blocks = Object.assign(editorData.blocks);
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].type == "header") {
      blocks.splice(i, 1);
      break;
    }
  }
  // TODO: Add MD Parser
  // return parse(blocks);
  return "";
};

export const getShortContent = (content: OutputData) => {
  for (let i = 0; i < content?.blocks?.length; i++)
    if (content.blocks[i].type == "paragraph" && content.blocks[i].data.text)
      return content.blocks[i].data.text.substring(0, 100);
  return "";
};

const EditorBlock = ({
  data,
  onChange,
}: {
  data?: OutputData;
  onChange(val: OutputData): void;
}) => {
  const ref = useRef<EditorJS>();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        ...configuration,
        data,
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return (
    <div className={styles.editorContainer}>
      <label className={styles.label} htmlFor="editor">
        Content
      </label>
      <div className={styles.editor} id="editor" />
    </div>
  );
};
export default memo(EditorBlock);
