"use client";
import React from "react";
import dynamic from "next/dynamic";
import OzCodeBlock from "./Components/Renderers/Code/OzCodeBlock";
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
  list: {
    //   container: {...},
    listItem: {
      lineHeight: "1.6em",
      letterSpacing: "0.04em",
    },
  },
  checklist: {
    container: {
      marginBottom: "2rem",
    },
    item: {
      lineHeight: "1.6em",
      letterSpacing: "0.04em",
      alignItems: "flex-start",
      marginBottom: "1rem",
    },
    //   checkbox: {...},
    label: {
      lineHeight: "1.6em",
      letterSpacing: "0.04em",
    },
  },
  table: {
    table: {
      lineHeight: "1.6em",
      letterSpacing: "0.04em",
    },
    //   tr: {...},
    //   th: {...},
    //   td: {...},
  },
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
};

const renderers = {
  asd: OzCodeBlock,
};

const Content = ({ content }: { content: string }) => {
  const data = JSON.parse(content);

  return <Output renderers={renderers} data={data} style={style} />;
};

export default Content;
