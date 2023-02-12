"use client";

import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import configuration from "./configuration";
import tools from "./tools";
import styles from "./Editor.module.scss";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};
const EditorBlock = ({ data, onChange, holder }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>();
  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: tools,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return <div className={styles.wrapper} id={holder} />;
};
export default memo(EditorBlock);
