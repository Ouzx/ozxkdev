"use client";
import React, { Fragment, useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import styles from "./Posting.module.scss";
import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

const Posting = () => {
  const [data, setData] = useState<OutputData>();
  return (
    <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
  );
};

export default Posting;
