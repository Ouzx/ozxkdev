"use client";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Warning from "@editorjs/warning";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import LinkTool from "@editorjs/link";
// @ts-ignore
import CodeTool from "@editorjs/code";
// @ts-ignore
import InlineCode from "@editorjs/inline-code";

import { getSession } from "next-auth/react";

export default {
  header: Header,
  list: List,
  asd: CodeTool,
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M",
  },
  image: {
    class: Image,
    config: {
      /* CUSTOM UPLOADER */
      uploader: {
        async uploadByFile(file: any) {
          const session = await getSession();
          const token = session?.user?.accessToken;

          const formData = new FormData();
          formData.append("image", file);
          return fetch(
            process.env.NEXT_PUBLIC_CMS_API + "/media/imgs/by-file",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token ? token : ""}`,
              },
              body: formData,
            }
          )
            .then((res) => res.json())
            .then((res) => {
              return res;
            })
            .catch((err) => {
              return {
                success: 0,
              };
            });
        },
      },
      // endpoints: {
      //   byFile: process.env.CMS_API + "/media/imgs/by-file",
      //   byUrl: process.env.CMS_API + "/media/imgs/by-url",
      //   // uploader: new Uploader(),
      // },
      // additionalRequestHeaders: {
      //   // bearer localStorage > user > accessToken
      //   Authorization: `Bearer ${token ? token : ""}`,
      // },
    },
  },
  quote: Quote,
  delimiter: Delimiter,
  checklist: CheckList,
  embed: Embed,
  table: Table,
  warning: Warning,
  linkTool: LinkTool,
};
