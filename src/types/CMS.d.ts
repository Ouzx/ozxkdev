export interface Post {
  _id?: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail: string;
  shared: boolean;
  slug: string;
  keyword: string;
  shortContent: string;
  createdAt: string;
}

export interface Posts {
  posts: Post[];
  totalItems: number;
}
