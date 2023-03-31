"use client";
import React from "react";
import dynamic from "next/dynamic";
const Posting = dynamic(() => import("../Components/Posting/Posting"), {
  ssr: false,
});

import { CREATE_POST } from "@/hooks/usePost";

const page = () => {
  return (
    <div>
      <Posting operation={CREATE_POST} />
    </div>
  );
};

export default page;
