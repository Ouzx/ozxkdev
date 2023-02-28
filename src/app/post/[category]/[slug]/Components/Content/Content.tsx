"use client";
import React from "react";
import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const Content = ({ content }: { content: string }) => {
  const data = JSON.parse(content);
  return <Output data={data} />;
};

export default Content;
