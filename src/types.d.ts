export interface Posts {
  posts: PostMini[];
  totalItems: number;
}

export interface PostMini {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail: string;
  raw: string;
  shared: boolean;
  urlSuffix: string;
  shortContent: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PostMain {
  post: Post;
  relatedPosts: PostMini[];
  prevPost: string;
  nexPost: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail: string;
  raw: string;
  shared: boolean;
  urlSuffix: string;
  shortContent: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
