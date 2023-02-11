import { EditorConfig, LogLevels } from "@editorjs/editorjs";
import tools from "./tools";
const configuration: EditorConfig = {
  holder: "editor",
  tools,
  autofocus: true,
  placeholder: "Let`s write an awesome story!",
  inlineToolbar: true,
  defaultBlock: "header",
  logLevel: "ERROR" as LogLevels,
};

export default configuration;
