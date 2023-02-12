"use client";
import React, { Fragment, useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import styles from "./Posting.module.scss";
import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

// TODO:Add getSLug

const Posting = () => {
  const [data, setData] = useState<OutputData>();
  return (
    <div className={styles.container}>
      <EditorBlock data={data} onChange={setData} />
    </div>
  );
};

export default Posting;
