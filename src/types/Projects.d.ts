export interface iProject {
  title: string;
  description: string;
  image: string;
  link?: string;
  linkType?: string;
}

export interface iProjects {
  projects: iProject[];
}
