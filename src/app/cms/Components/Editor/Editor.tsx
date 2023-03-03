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
  return JSON.stringify(editorData);
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
  tabIndex,
}: {
  data?: OutputData;
  onChange(val: OutputData): void;
  tabIndex?: number;
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
      <div className={styles.editor} tabIndex={tabIndex} id="editor" />
    </div>
  );
};
export default memo(EditorBlock);
