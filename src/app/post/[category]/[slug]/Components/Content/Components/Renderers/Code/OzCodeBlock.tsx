import React from "react";
import type { CSSProperties } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const defaultStyle: { [key: string]: CSSProperties } = {
  container: {
    width: "100%",
  },
  code: {
    borderRadius: "1rem",
  },
};

type CodeBoxOutputData = {
  code: string;
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

const OzCodeBlock = ({
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

  if (!data || !data.code || typeof data.code != "string") return <></>;
  const containerStyle = config.disableDefaultStyle
    ? style.container
    : { ...defaultStyle.container, ...style.container };
  const codeStyle = config.disableDefaultStyle
    ? style.code
    : { ...defaultStyle.code, ...style.code };

  const [lang, ...code] = data.code.split("\n")[0].split(" ");
  // if language is starts with #, then use its value as language
  let language = "javascript";
  if (language.startsWith("#")) language = language.replace("#", "");

  let content = null;

  if (typeof data === "string") content = data;
  else if (
    typeof data === "object" &&
    data.code &&
    typeof data.code === "string"
  )
    content = data.code;

  return content ? (
    <div style={containerStyle}>
      <SyntaxHighlighter
        showLineNumbers
        language={language || "javascript"}
        style={github}
        customStyle={codeStyle}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  ) : (
    <></>
  );
};

export default OzCodeBlock;
