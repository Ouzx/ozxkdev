"use client";
import React, { createRef, useEffect, useCallback } from "react";
import type { CSSProperties } from "react";
import parse from "html-react-parser";

const supportedKeys = ["container", "code"];

const injectHighlightJSScriptElement = () => {
  const highlightJSScriptURL =
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js";
  const highlightJSScriptElements = document.querySelectorAll("script");
  let isAlreadyIncluded = false;

  for (let i = 0; i < highlightJSScriptElements.length; i++) {
    if (highlightJSScriptElements[i].src.includes("highlight.min.js")) {
      isAlreadyIncluded = true;
      break;
    }
  }
  if (!isAlreadyIncluded) {
    const script = document.createElement("script");
    const head = document.querySelector("head");
    script.setAttribute("src", highlightJSScriptURL);

    if (head) head.appendChild(script);
  }
};

const injectHighlightJSCSSElement = (highlightJSCSSURL?: string) => {
  if (!highlightJSCSSURL || typeof highlightJSCSSURL !== "string") return;

  const highlightJSCSSElements = document.querySelectorAll("link");
  let isAlreadyIncluded = false;

  for (let i = 0; i < highlightJSCSSElements.length; i++) {
    if (highlightJSCSSElements[i].href === highlightJSCSSURL) {
      isAlreadyIncluded = true;
      break;
    }
  }
  if (!isAlreadyIncluded) {
    const link = document.createElement("link");
    const head = document.querySelector("head");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", highlightJSCSSURL);

    if (head) head.appendChild(link);
  }
};

const defaultStyle: { [key: string]: CSSProperties } = {
  container: {
    width: "100%",
  },
  code: {
    width: "100%",
    minHeight: "30px",
    boxSizing: "border-box",
    textAlign: "left",
    margin: "8px 0",
    marginTop: "15px",
    padding: "1rem",
    // paddingLeft: "1.5rem",
    borderRadius: "2px 2px 2px 0",
    border: "none !important",
    borderStartEndRadius: "1rem",
    borderStartStartRadius: "1rem",
    borderEndEndRadius: "1rem",
    borderEndStartRadius: "1rem",
    backgroundColor: "#1F1F1F",
    outline: "none !important",
    fontSize: "14px",
  },
};

/**********************************************       TYPES       ******************************************/

type CodeBoxOutputData = {
  code: string;
  theme?: string;
  language?: string;
};

type CodeBoxOutputClassNames = {
  container?: string;
  code?: string;
};

type CodeBoxOutputStyles = {
  container?: CSSProperties;
  code?: CSSProperties;
};

type CodeBoxOutputProps = {
  data: CodeBoxOutputData;
  style?: CodeBoxOutputStyles;
  classNames?: CodeBoxOutputClassNames;
  config?: ErrConfig;
};

type ErrConfig = {
  disableDefaultStyle: boolean;
};

/**********************************************     FUNCTIONS     ******************************************/

const CodeBoxOutput = ({
  data,
  style,
  classNames,
  config,
}: CodeBoxOutputProps): JSX.Element => {
  if (!style || typeof style !== "object") style = {};
  if (!config || typeof config !== "object")
    config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== "object") classNames = {};

  if (!style.container || typeof style.container !== "object")
    style.container = {};
  if (!classNames.container || typeof classNames.container !== "string")
    classNames.container = "";

  if (!style.code || typeof style.code !== "object") style.code = {};
  if (!classNames.code || typeof classNames.code !== "string")
    classNames.code = "";

  const codeAreaRef = createRef<HTMLElement>();
  // TODO: Control this?
  const highlightBlock = useCallback(() => {
    if (typeof (window as any).hljs !== "undefined") {
      const codeElement = codeAreaRef.current;
      if (codeElement && codeElement.className) {
        (window as any).hljs.highlightBlock(codeElement);
      }
    } else setTimeout(highlightBlock, 250);
  }, [codeAreaRef]);

  useEffect(() => {
    if (data && data.theme && codeAreaRef.current) {
      injectHighlightJSCSSElement(data.theme);
      injectHighlightJSScriptElement();
      highlightBlock();
    }
  }, []);

  if (!data || !data.code || typeof data.code != "string") return <></>;
  const containerStyle = config.disableDefaultStyle
    ? style.container
    : { ...defaultStyle.container, ...style.container };
  const codeStyle = config.disableDefaultStyle
    ? style.code
    : { ...defaultStyle.code, ...style.code };

  const language =
    data.language && typeof data.language === "string" ? data.language : null;

  return (
    <pre style={containerStyle} className={classNames.container}>
      <code
        ref={codeAreaRef}
        style={codeStyle}
        className={`${language} ${classNames.code}`}
      >
        {parse(data.code)}
      </code>
    </pre>
  );
};

export default CodeBoxOutput;
