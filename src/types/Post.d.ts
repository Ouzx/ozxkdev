export interface Posts {
  posts: iPost[];
  totalItems: number;
}
export interface PostMain {
  post: iPost;
  relatedPosts: iPost[];
  prevPost: string;
  nexPost: string;
}
export interface iPost {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  thumbnail: string;
  shared: boolean;
  slug: string;
  keyword: string;
  shortContent: string;
  createdAt: string;
}
