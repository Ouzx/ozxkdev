export interface Posts {
  posts: iPost[];
  totalItems: number;
}

// export interface PostMini {
//   _id: string;
//   title: string;
//   content: string;
//   category: string;
//   tags: string[];
//   thumbnail: string;
//   raw: string;
//   shared: boolean;
//   urlSuffix: string;
//   shortContent: string;
//   user: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

export interface PostMain {
  post: iPost;
  relatedPosts: iPost[];
  prevPost: string;
  nexPost: string;
}

// export interface Post {
//   _id: string;
//   title: string;
//   content: string;
//   category: string;
//   tags: string[];
//   thumbnail: string;
//   raw: string;
//   shared: boolean;
//   urlSuffix: string;
//   shortContent: string;
//   user: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

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
  createdAt: string;
}
