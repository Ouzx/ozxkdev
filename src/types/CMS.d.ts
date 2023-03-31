import { OutputData } from "@editorjs/editorjs";
export interface iPost {
  _id: string;
  title: string;
  content: string | OutputData;
  category: string;
  tags: string[];
  thumbnail: string;
  shared: boolean;
  slug: string;
  keyword: string;
  shortContent: string;
  createdAt?: string;
}

export interface Posts {
  posts: iPost[];
  totalItems: number;
}
