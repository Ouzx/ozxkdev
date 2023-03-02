"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "./Content.module.scss";
const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const style = {
  paragraph: {
    // marginTop: "1rem",
    lineHeight: "1.6em",
    letterSpacing: "0.04em",
    marginBottom: "1rem",
  },
  // header: {
  //   h1: {...},
  //   h2: {...},
  //   h3: {...},
  //   h4: {...},
  //   h5: {...},
  //   h6: {...},
  // },
  image: {
    img: {
      gridArea: "stack",
    },
    figure: {
      display: "grid",
      gridTemplateAreas: '"stack"',
    },
    figcaption: {
      gridArea: "stack",
    },
  },
  // video: {
  //   video: {...},
  //   figure: {...},
  //   figcaption: {...}
  // },
  // embed: {
  //   video: {...},
  //   figure: {...},
  //   figcaption: {...}
  // },
  // list: {
  //   container: {...},
  //   listItem: {...},
  // },
  // checklist: {
  //   container: {...},
  //   item: {...},
  //   checkbox: {...},
  //   label: {...},
  // },
  // table: {
  //   table: {...},
  //   tr: {...},
  //   th: {...},
  //   td: {...},
  // },
  quote: {
    container: {
      justifyContent: "flex-start",
      margin: "1rem 0",
      border: "1px solid #f2f2f2",
      borderRadius: "0.5rem",
      padding: "1rem",
      // drop shadow
      boxShadow: "0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)",
    },
    content: {},
    author: {},
    // message: {...}
  },
  codeBox: {
    container: {
      margin: "10rem 10rem",
    },
    // code: {...},
  },
  // warning: {
  //   container: {...},
  //   icon: {...},
  //   title: {...},
  //   message: {...},
  // },
  delimiter: {
    container: {
      width: "80%",
      height: "1px",
      borderRadius: "999px",
      backgroundColor: "#f2f2f2",
      margin: "1rem auto",
    },
    svg: {
      display: "none",
    },
    path: {
      display: "none",
    },
  },

  // linkTool: {
  //   container: {...},
  //   textHolder: {...},
  //   title: {...},
  //   description: {...},
  //   image: {...},
  //   siteName: {...}
  // },
};

const Content = ({ content }: { content: string }) => {
  const data = JSON.parse(content);
  return <Output data={data} style={style} />;
};

export default Content;
